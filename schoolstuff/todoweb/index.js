const express = require('express')
const app = express()
const fs = require('fs')

const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended : true}))

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            const tasks = JSON.parse(data)
            resolve(tasks)
        })
    })
}

const writeFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf-8', err => {
            if (err) {
                console.error(err)
                return
            }
            resolve(true)
        })
    })
}

app.get('/', (req, res) => {
    readFile('./tasks.json')
    .then(tasks =>{
        res.render('index', {tasks: tasks, error: null})
    })
})


app.get('/delete-task/:taskId', (req, res) => {
    let deletedTaskId = parseInt(req.params.taskId)
    readFile('./tasks.json')
    .then(tasks => {
        tasks.forEach((task, index) => {
            if(task.id === deletedTaskId){
                console.log('found task and deleted it')
                tasks.splice(index, 1)
            }
        })
        data = JSON.stringify(tasks, null, 2)
        writeFile('./tasks.json', data)
        console.log('deleted')
        res.redirect('/')
    })
})

app.get('/edit/:taskId/:task', (req, res) => {
    res.render('edit', {taskId: parseInt(req.params.taskId),task: req.params.task, error: null})
})

function isValidString(input) {
    return typeof input === 'string' && input.trim().length > 0;
}

app.post('/', (req, res) => {
    let error = null
    if (!isValidString(req.body.task)) {
        error = "Refused empty string or value that was not a string. Please enter a valid value."
        readFile('./tasks.json')
        .then(tasks =>{
            res.render('index', {
                tasks: tasks,
                error: error
            })
        })
    } else {
        console.log(req.body)
        readFile('./tasks.json')
        .then(tasks =>{
            let index
            if(tasks.length === 0)
            {
                index = 0
            } else {
                index = tasks[tasks.length-1].id + 1;
            }
            
            const newTask = {
                "id" : index,
                "task" : req.body.task
            }
            if (isValidString(req.body.task)) {
                tasks.push(newTask)
                data = JSON.stringify(tasks, null, 2)
                writeFile('./tasks.json', data)
            } else {
                console.log("Refused empty string or value that was not a string.")
            }
            res.redirect('/')
        })    
    }
})

app.post('/edit', (req, res) => {
    let error = null
    if (!isValidString(req.body.task)) {
        error = "Refused empty string or value that was not a string. Please enter a valid value."
        readFile('./tasks.json')
        .then(tasks => {
            res.render('edit', { taskId: req.body.id, error: error })
        });
    } else {
        readFile('./tasks.json')
        .then(tasks => {
            tasks.forEach(task => {
                if (task.id === parseInt(req.body.id)) {
                    task.task = req.body.task; // Update task
                }
            });
            const data = JSON.stringify(tasks, null, 2)
            writeFile('./tasks.json', data)
            .then(() => {
                res.redirect('/');
            })
        })
    }
})

app.listen(3001, () => {
    console.log('http://localhost:3001')
})
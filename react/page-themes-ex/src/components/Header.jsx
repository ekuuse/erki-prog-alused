const Header = (props) => {
    const toggleTheme = () => {
        props.onToggleTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        console.log(`set theme `)
      };

    return(
        <header>
            <h1>Demo Website Erki</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    )
}

export default Header
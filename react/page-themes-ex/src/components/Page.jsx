import Header from "./Header";
import ThemeContext from "../store/theme-context";
import { useContext } from "react";

const Page = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div id="app" className={`app ${theme}`} >
      <Header onToggleTheme={setTheme}/>

      <article>
        <h2>React Course</h2>
        <p>A course that teaches you React.</p>
      </article>
    </div>
  );
};

export default Page

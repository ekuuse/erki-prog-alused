import { useState } from "react";
import Page from "./components/Page";
import ThemeContext from "./store/theme-context";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />;
    </ThemeContext.Provider>
  );
};

export default App;

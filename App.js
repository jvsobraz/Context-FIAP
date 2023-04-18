import React, { useState } from "react";

import { ThemeContext, themes } from "./context/ThemeContext";
import Header from "./components/Header";
import ThemeToggler from "./components/ThemeToggler";

export default function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Header/>
      <ThemeToggler/>
    </ThemeContext.Provider>
  );
}
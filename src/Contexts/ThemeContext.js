import { createContext, useEffect } from "react";
import useLocalStorageToggle from "../Hooks/useLocalStorageToggle";

const ThemeContext = createContext(false);

function ThemeProvider(props) {
    const [darkTheme, toggleDarkTheme] = useLocalStorageToggle("darkTheme", true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkTheme);
    }, [darkTheme]);


    return (
        <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export { ThemeContext, ThemeProvider };
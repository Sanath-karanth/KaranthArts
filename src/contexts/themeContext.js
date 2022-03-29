import { createContext, useState, useEffect } from "react";

const themes = {
    dark: {
        backgroundColor: "black",
        color:"white",
        headercolor:'dark',
        headericoncolor:'#61DBFB',
        cardColor:'#343a40',
    },
    light: {
        backgroundColor: "#ebebeb",
        color:"black",
        headercolor:'light',
        headericoncolor:'#4c768d',
        cardColor:'white',
    },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [isDark,setIsDark] = useState(false);
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setIsDark(!isDark);
    };

    useEffect(() => {
        const isDark = localStorage.getItem('isDark') === "true";
        setIsDark(isDark);
    }, []);

    return (
        <ThemeContext.Provider value={[{ theme, isDark}, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
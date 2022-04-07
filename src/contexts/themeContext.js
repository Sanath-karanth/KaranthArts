import { createContext, useState, useEffect } from "react";

const themes = {
    dark: {
        backgroundColor: "black",
        color:"white",
        headercolor:'dark',
        headericoncolor:'#61DBFB',
        headerheadtextcolor:'#61DBFB',
        footerbgcolor:'#292b2c',
        footerheadtext:'#61DBFB',
        footericoncolor:'#61DBFB',
        footerCopyrighttext:'#61DBFB',
        maincontentheadtextcolor:'#61DBFB',
        cardbgColor:'#343a40',
        cardtitletextcolor:'#61DBFB',
        cardartdatetextcolor:'#61DBFB',
        cardbuttoncolor:'info',
        bordercoloraqua:'aqua',
        bordercolorpurple:'#800080'
    },
    light: {
        backgroundColor: "#ebebeb",
        color:"black",
        headercolor:'light',
        headericoncolor:'#4c768d',
        headerheadtextcolor:'#4c768d',
        footerbgcolor:'white',
        footerheadtext:'#000000',
        footericoncolor:'#000000',
        footerCopyrighttext:'#000000',
        maincontentheadtextcolor:'#000000',
        cardbgColor:'white',
        cardtitletextcolor:'#4c768d',
        cardartdatetextcolor:'#0000FF',
        cardbuttoncolor:'dark',
        bordercoloraqua:'aqua',
        bordercolorpurple:'#800080'
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
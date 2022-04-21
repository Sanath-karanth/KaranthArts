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
        speeddialcolor:'#FFFFFF',
        speeddialPluscolor:'#000000',
        speeddialIconcolor:'#000000',
        speeddialIconhovercolor:'#C0C0C0',
        maincontentheadtextcolor:'#61DBFB',
        cardbgColor:'#343a40',
        cardtitletextcolor:'#61DBFB',
        cardartdatetextcolor:'#61DBFB',
        cardbuttoncolor:'info',
        cardbuttontextbordercolor:'#61DBFB',
        bordercoloraqua:'aqua',
        bordercolorpurple:'#800080',
        bordercolormaroon:'#800000'
    },
    light: {
        backgroundColor: "#FFFFFF",
        color:"black",
        headercolor:'light',
        headericoncolor:'#4c768d',
        headerheadtextcolor:'#4c768d',
        footerbgcolor:'white',
        footerheadtext:'#000000',
        footericoncolor:'#000000',
        footerCopyrighttext:'#000000',
        speeddialcolor:'#000000',
        speeddialPluscolor:'#FFFFFF',
        speeddialIconcolor:'#61DBFB',
        speeddialIconhovercolor:'#343a40',
        maincontentheadtextcolor:'#000000',
        cardbgColor:'white',
        cardtitletextcolor:'#4c768d',
        cardartdatetextcolor:'#0000FF',
        cardbuttoncolor:'dark',
        cardbuttontextbordercolor:'#000000',
        bordercoloraqua:'linear-gradient(to left , rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))',
        bordercolorpurple:'#800080',
        bordercolormaroon:'#800000'
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
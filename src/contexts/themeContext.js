import { createContext, useState, useEffect } from "react";

const themes = {
    dark: {
        backgroundColor: "black",
        backgroundColorother: "#000000",
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
        bordergradientcolor1:'linear-gradient(to right, #4CB8C4 0%, #93F9B9 100%)',
        bordergradientcolor2:'linear-gradient(to right, #b20a2c 0%, #fffbd5 100%)',
        bordergradientcolor3:'linear-gradient(to right, #C9D6FF 0%, #E2E2E2 100%)',
        bordergradientcolor4:'linear-gradient(to right, #E100FF 0%, #0082c8 100%)',
        bordergradientcolor5:'linear-gradient(to right, #642B73 0%, #C6426E 100%)',
        bordergradientcolor6:'linear-gradient(to right, #000046 0%, #1CB5E0 100%)',
        bordergradientcolor7:'linear-gradient(to right, #20002c 0%, #cbb4d4 100%)',
        bordergradientcolor8:'linear-gradient(to right, #000C40 0%, #F0F2F0 100%)',
        imageshadow:'0px 0px white,0px 0px white,0 0 10px 5px #fff,0 0 10px 5px #fff',
        aboutgradient:'0 4px 8px 0 #FFFFFF, 0 6px 20px 0 #FFFFFF',
        abouticoncolor:'black',
        aboutsocialiconcolor:'#61DBFB',
        textShadow:'2px 2px 4px #FFFFFF'
    },
    light: {
        backgroundColor: "#FFFFFF",
        backgroundColorother: "#f5f5f5",
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
        bordergradientcolor1:'linear-gradient(to right, #34e89e 0%, #0f3443 100%)',
        bordergradientcolor2:'linear-gradient(to right, #dd1818 0%, #0f3443 100%)',
        bordergradientcolor3:'linear-gradient(to right, #a8c0ff 0%, #0f3443 100%)',
        bordergradientcolor4:'linear-gradient(to right, #E100FF 0%, #0f3443 100%)',
        bordergradientcolor5:'linear-gradient(to right, #642B73 0%, #C6426E 100%)',
        bordergradientcolor6:'linear-gradient(to right, #000046 0%, #1CB5E0 100%)',
        bordergradientcolor7:'linear-gradient(to right, #20002c 0%, #cbb4d4 100%)',
        bordergradientcolor8:'linear-gradient(to right, #000C40 0%, #F0F2F0 100%)',
        imageshadow:'0px 0px white,0px 0px white,0 0 20px 5px #C0C0C0,0 0 20px 5px #C0C0C0',
        aboutgradient:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        abouticoncolor:'black',
        aboutsocialiconcolor:'#FFFFFF',
        textShadow:'2px 2px 4px #000000'
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
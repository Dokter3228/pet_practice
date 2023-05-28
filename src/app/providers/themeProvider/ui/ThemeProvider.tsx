import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
import Element = React.JSX.Element;

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider= ({children}: { children: React.ReactNode }) => {
    const [theme,setTheme] = useState<Theme>(defaultTheme)
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
import React, {
    FC, ReactNode, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviederProps{
    initialTheme?:Theme
    children:ReactNode
}

const ThemeProvider = ({ children, initialTheme }:ThemeProviederProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

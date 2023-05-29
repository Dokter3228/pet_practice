import './styles/index.scss'
import {Link, Outlet} from "react-router-dom";
import React from "react";
import {useTheme} from "app/providers/themeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme} >TOGGLE</button>
            <Outlet />
        </div>
    );
};

export default App;
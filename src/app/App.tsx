import './styles/index.scss'
import {Link, Outlet} from "react-router-dom";
import React from "react";
import {useTheme} from "app/providers/themeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";


const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme} >TOGGLE</button>
            <Link to="/" >Главная</Link>
            <Link to="/about" >О сайте</Link>
            <Outlet />
        </div>
    );
};

export default App;
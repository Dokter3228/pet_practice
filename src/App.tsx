import './styles/index.scss'
import {Link, Outlet} from "react-router-dom";
import React, {useContext} from "react";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme} >TOGGLE</button>
            <Link to="/" >Главная</Link>
            <Link to="/about" >О сайте</Link>
            <Outlet />
        </div>
    );
};

export default App;
import './styles/index.scss'
import {Outlet} from "react-router-dom";
import React, {Suspense} from "react";
import {useTheme} from "app/providers/themeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <div className="page-wrapper">
                        <Outlet />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
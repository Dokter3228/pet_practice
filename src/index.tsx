import {createRoot} from "react-dom/client";
import App from "./app/App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Suspense} from "react";
import {ThemeProvider} from "app/providers/themeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <MainPage />},
            {
                path: "about",
                element: <AboutPage />
            },
        ]
    },
]);

root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Suspense>
)
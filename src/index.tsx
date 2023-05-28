import {createRoot} from "react-dom/client";
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Suspense} from "react";
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import ThemeProvider from "./theme/ThemeProvider";

const root = createRoot(document.getElementById('root'));



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <MainPageLazy />},
            {
                path: "about",
                element: <AboutPageLazy />
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
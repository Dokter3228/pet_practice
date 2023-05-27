import {createRoot} from "react-dom/client";
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Suspense} from "react";
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";

const root = createRoot(document.getElementById('root'));



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPageLazy />
    },
    {
        path: "/about",
        element: <AboutPageLazy />
    },
]);

root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
    </Suspense>
)
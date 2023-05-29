import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Suspense} from "react";
import {ThemeProvider} from "app/providers/themeProvider";
import {routes} from "shared/config/routeConfig/routeConfig";

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter(routes);

root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Suspense>
)
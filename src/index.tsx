import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { ThemeProvider } from 'app/providers/themeProvider'
import { routes } from 'shared/config/routeConfig/routeConfig'

import 'shared/config/i18n/i18n'

const root = createRoot(document.getElementById('root') as Element)

const router = createBrowserRouter(routes)

root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
)

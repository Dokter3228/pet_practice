import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Suspense } from 'react'
import { ThemeProvider } from 'app/providers/themeProvider'
import { routes } from 'shared/config/routeConfig/routeConfig'

import 'shared/config/i18n/i18n'

const root = createRoot(document.getElementById('root') as Element)

const router = createBrowserRouter(routes)

root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Suspense>
)

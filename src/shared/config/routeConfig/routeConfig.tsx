import { type RouteObject } from 'react-router'
import App from 'app/App'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

enum RoutePath {
  'MAIN' = '/',
  'ABOUT' = '/about'
}

export const routes: RouteObject[] = [
  {
    path: RoutePath.MAIN,
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: RoutePath.ABOUT,
        element: <AboutPage />
      }
    ]
  }
]

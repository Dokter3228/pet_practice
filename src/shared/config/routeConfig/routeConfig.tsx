import { type RouteObject } from 'react-router';
import App from 'app/App';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from "pages/NotFoundPage";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

export enum RoutePath {
  'MAIN' = '/',
  'ABOUT' = '/about',
  "NOT_FOUND" = '/*',
}

export const routes: RouteObject[] = [
  {
    path: RoutePath.MAIN,

    element:
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: RoutePath.ABOUT,
        element: <AboutPage />
      },
      {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage />
      }
    ]
  },
];

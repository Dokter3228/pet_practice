import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import type React from 'react';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/themeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from "widgets/PageLoader";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
      <div className={classNames('app', {}, [theme])}>
          <Navbar />
          <div className="content-page">
              <Sidebar />
              <Suspense fallback={<PageLoader />}>
                  <div className="page-wrapper">
                      <Outlet />
                  </div>
              </Suspense>

          </div>
      </div>
  );
};

export default App;

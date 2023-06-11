import { Outlet } from 'react-router-dom';
import type React from 'react';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from "widgets/PageLoader";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
      <div className={classNames('app', {}, [])}>
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

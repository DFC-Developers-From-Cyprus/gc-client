import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { RootState } from '@/core/store/store';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!isAuth) {
    // редирект на стартовую или логин
    return (
      <Navigate
        to="/"
        replace
        state={{
          from: location.pathname,
          message: 'You need to login',
        }}
      />
    );
  }

  return <>{children}</>;
}

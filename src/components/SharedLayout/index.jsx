import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/shopsSelectors';

function SharedLayout() {
  const loading = useSelector(selectIsLoading);

  return (
    <>
      <Header />
      <main>
        {loading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default SharedLayout;

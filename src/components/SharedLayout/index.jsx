import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Loader from "../Loader";

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        {/* {loading && <Loader />} */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default SharedLayout;

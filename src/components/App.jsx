import { Routes, Route } from "react-router-dom";
import "../index.css";
import SharedLayout from "./SharedLayout";
import { lazy } from "react";
const HomePage = lazy(() => import("../pages/HomePage"));
const ShoppingCartPage = lazy(() => import("../pages/ShoppingCartPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

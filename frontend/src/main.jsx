import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Authlayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import Checkout from "./pages/Checkout";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import PublicLayout from "./layouts/PublicLayout";
import MyOrderPage from "./pages/MyOrderPage";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/product", element: <ProductPage /> },
          { path: "details/:productId", element: <ProductDetails /> },
          { path: "/contact", element: <ContactPage /> },
          { path: "/aboutUs", element: <AboutUs /> },
        ],
      },

      {
        path: "/auth",
        element: <Authlayout />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
          { path: "account", element: <AccountPage /> },
          { path: "checkout", element: <Checkout /> },
          { path: "myOrder", element: <MyOrderPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

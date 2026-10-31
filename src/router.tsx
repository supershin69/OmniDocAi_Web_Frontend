import { createBrowserRouter } from "react-router";
import App from "./App";
import AuthLayout from "./features/auth/AuthLayout";
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

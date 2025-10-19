import RootLayout from "@/layouts/root-layout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home-page";
import TestPage from "@/pages/test-page";
import LoginPage from "@/pages/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "test", element: <TestPage /> },
    ],
  },
]);

export default router;

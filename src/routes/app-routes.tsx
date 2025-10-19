import RootLayout from "@/layouts/root-layout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home-page";
import TestPage from "@/pages/test-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "test", element: <TestPage /> },
    ],
  },
]);

export default router;

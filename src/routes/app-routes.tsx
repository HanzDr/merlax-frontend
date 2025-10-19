import RootLayout from "@/layouts/root-layout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;

import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainScreen from "./pages/MainScreen.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:signin/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:signin/repository",
        element: <MainScreen />,
      },
      {
        path: "/:signin/AICodeReviewer",
        element: <h1 className="text-center">AI Code Reviewer</h1>,
      },
      {
        path: "/:signin/CloudSecurity",
        element: <h1 className="text-center">Cloud Security</h1>,
      },
      {
        path: "/:signin/howtouse",
        element: <h1 className="text-center">How to Use</h1>,
      },
      {
        path: "/:signin/settings",
        element: <h1 className="text-center">Settings</h1>,
      },
      {
        path: "/:signin/support",
        element: <h1 className="text-center">Support</h1>,
      },
      {
        path: "/:signin/*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);

import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/Homepage";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendDetails from "../pages/FriendDetails";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Homepage />,
        loader: () => fetch("/friends.json"),
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/friends/:id",
        element: <FriendDetails />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../Pages/HomePage";
import CybersportPage from "../Pages/CybersportPage";
import ErrorPage from "../Pages/ErrorPage";
import HeroesPage from "../Pages/HeroesPage";
import ItemsPage from "../Pages/ItemsPage";
import BlogPage from "../Pages/BlogPage";
import MatchesPage from "../Pages/MatchesPage";
import PlayersPage from "../Pages/PlayersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/cybersport", element: <CybersportPage /> },
      { path: "/heroes", element: <HeroesPage /> },
      { path: "/items", element: <ItemsPage /> },
      { path: "/players", element: <PlayersPage /> },
      { path: "/matches", element: <MatchesPage /> },
      { path: "/blog", element: <BlogPage /> },
    ],
  },
]);

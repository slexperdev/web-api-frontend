import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginView from "./Views/Auth/LoginView";
import CruiseView from "./Views/Home/CruiseView";
import PackageView from "./Views/Home/PackageView";
import ActivityView from "./Views/Home/ActivityView";
import PackageDetailView from "./Views/Home/Detail/PackageDetailView";
import CruiseDetailView from "./Views/Home/Detail/CruiseDetailView";
import ActivityDetailView from "./Views/Home/Detail/ActivityDetailView";
import UnknownView from "./Views/404";

import { ProtectedRoutes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <CruiseView />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/activity",
    element: (
      <ProtectedRoutes>
        <ActivityView />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/package",
    element: (
      <ProtectedRoutes>
        <PackageView />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/cruise-detail",
    element: (
      <ProtectedRoutes>
        <CruiseDetailView />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/activity-detail",
    element: (
      <ProtectedRoutes>
        <ActivityDetailView />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/package-detail",
    element: (
      <ProtectedRoutes>
        <PackageDetailView />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: <LoginView />,
  },

  {
    path: "/*",
    element: <UnknownView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

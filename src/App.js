import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginView from "./Views/Auth/LoginView";
import CruiseView from "./Views/Home/CruiseView";
import PackageView from "./Views/Home/PackageView";
import ActivityView from "./Views/Home/ActivityView";
import DetailView from "./Views/Home/DetailView";
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
    path: "/detail",
    element: (
      <ProtectedRoutes>
        <DetailView />
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

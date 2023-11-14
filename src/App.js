import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginView from "./Views/Auth/LoginView";
import CruiseView from "./Views/Home/Cruise";
import PackageView from "./Views/Home/Package";
import ActivityView from "./Views/Home/Activity";
import DetailView from "./Views/Home/Detail";
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

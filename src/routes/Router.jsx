import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../Pages/LandingPage/LandingPage";
import LoginPage from "../Pages/LoginPage/Loginpage";
import AppointmentForm from "../Components/Appointment/Appoinment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/doctor-appintment",
    element: <AppointmentForm />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

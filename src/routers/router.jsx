import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import Loading from "../pages/Shared/Loading";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "jobDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobDetails/${params.id}`),
        Component: JobDetails,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivetRoute>
            <JobApply />
          </PrivetRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivetRoute>
            <MyApplication />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;

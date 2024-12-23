import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../components/Error";
import Home from "../pages/Home";
import Queries from "../pages/Queries";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyQueries from "../pages/MyQueries";
import PrivateRoute from "./PrivateRoute";
import MyRecommendations from "../pages/MyRecommendations";
import Recommendations from "../pages/Recommendations";
import AddQueries from "../pages/AddQueries";
import UpdateQueries from "../pages/UpdateQueries";
import QueryDetails from "../pages/QueryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "queries",
        element: <Queries></Queries>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "myQueries",
        element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>,
      },
      {
        path: "myRecommendations",
        element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>,
      },
      {
        path: "recommendations",
        element: <PrivateRoute><Recommendations></Recommendations></PrivateRoute>,
      },
      {
        path: "addQueries",
        element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>,
      },
      {
        path: "updateQueries/:id",
        element: <PrivateRoute><UpdateQueries></UpdateQueries></PrivateRoute>,
       
      },
      {
        path: "queryDetails/:id",
        element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/queries/${params.id}`),
      },
    ],
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import CheckOut from "../components/CheckOut";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Orders from "../components/Orders";
import PrivateRoute from "../components/PrivateRoute";
import Services from "../components/Services";
import SignUp from "../components/SignUp";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
        element: <CheckOut />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;

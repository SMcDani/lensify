import "./styles/App.css";
import Nav from "./Nav";
import Layout from "./Layout";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Invoices from "./pages/Invoices";
import Account from "./pages/Account";

import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

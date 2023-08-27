import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from "./components/App.jsx";
import store from "./store";
import Layout from "./components/container/Layout.jsx";
import Moive from "./components/Moive";
import PageNotFound from './components/boundaries/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <React.Suspense fallback={<>Loading</>}> <App /> </React.Suspense>,
      },
      {
        path: "/movie/:movieId",
        element: <Moive />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
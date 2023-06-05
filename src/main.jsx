import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Name from "./Pages/Name.jsx";
import Game from "./Pages/Game.jsx";
import Result from "./Pages/Result.jsx";
import { Provider } from "react-redux";
import Store from "./Store/Store.jsx";
import PrivateRouter from "./Router/PrivateRouter.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Name />,
      },
      {
        path: "/game",
        element: (
          <PrivateRouter>
            <Game />
          </PrivateRouter>
        ),
      },
      {
        path: "/result",
        element: (
          <PrivateRouter>
            <Result />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrackingPage from "./components/pages/TrackingPage/TrackingPage";
import OfficesPage from "./components/pages/OfficesPage/OfficesPage";
import { Provider } from "react-redux/es/exports";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <TrackingPage />,
      },
      {
        path: "/offices",
        element: <OfficesPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.js";
import ErrorPage from "./error-page.js";
import Contact, { loader as contactLoader } from "./routes/contact.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Contact />,
        loader: contactLoader,
        path: "contacts/:contactId",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

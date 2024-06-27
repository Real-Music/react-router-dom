import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.js";
import Index from "./routes/index.js";
import ErrorPage from "./error-page.js";
import { action as destroyAction } from "./routes/destroy.js";
import EditContact, { action as editAction } from "./routes/edit";
import Contact, { loader as contactLoader } from "./routes/contact.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        element: <Contact />,
        loader: contactLoader,
        path: "contacts/:contactId",
      },
      {
        action: editAction,
        loader: contactLoader,
        element: <EditContact />,
        path: "contacts/:contactId/edit",
      },
      {
        action: destroyAction,
        path: "contacts/:contactId/destroy",
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

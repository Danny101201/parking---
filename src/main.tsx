import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  }
]);


createRoot(document.getElementById("root") as Element).render(
  <RouterProvider router={router} />
);
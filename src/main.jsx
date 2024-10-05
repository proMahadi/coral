import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import "./style/index.css";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer style={{ width: "345px" }} />
    </Provider>
  </React.StrictMode>
);

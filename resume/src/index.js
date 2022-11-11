import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CustomHookdetails from "./CustomHooks/CustomHookdetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <CustomHookdetails/>
    </BrowserRouter>
);

import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import './_base.scss'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

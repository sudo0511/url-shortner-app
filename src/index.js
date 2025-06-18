import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import './index.css';

const root = document.getElementById('root');
const app = createRoot(root);
app.render(
    <React.StrictMode>
        <BrowserRouter><App /></BrowserRouter>
    </React.StrictMode>
);
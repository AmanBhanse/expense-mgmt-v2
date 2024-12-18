import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./pages/container";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("source")).render(<Router><Container /></Router>);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Layout from "./Layout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddToDo from "./components/AddToDo/AddToDo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/addToDo" element={<AddToDo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

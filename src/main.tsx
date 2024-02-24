import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Layout from "./Layout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddToDo from "./components/AddToDo/AddToDo.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/Store.tsx";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="/toDoListDefault"></Route>
                <Route path="/toDoListCategory"></Route>
              </Route>
              <Route path="/addToDo" element={<AddToDo />} />
            </Routes>
          </PersistGate>
        </Provider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen.js/LoginScreen";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import "./_app.scss";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    toggleSidebar((value) => !value);
  };
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container className="app__main " fluid>
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route path="/auth" element={<LoginScreen />} />
        <Route
          path="/search"
          element={
            <Layout>
              <h1>search results</h1>
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

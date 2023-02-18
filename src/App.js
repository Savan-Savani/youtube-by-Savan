import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import "./_app.scss";

const App = () => {

  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = ()=>{
    toggleSidebar(value => !value)
  }

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar}/>
        <Container className="app__main border border-warning" fluid>
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
};

export default App;

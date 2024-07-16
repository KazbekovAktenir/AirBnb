import React from "react";
import Navbar from "./components/homePage/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Body from "./components/homePage/Body";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Body />
    </div>
  );
};

export default App;

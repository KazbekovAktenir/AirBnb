import React from "react";
import Navbar from "./components/homePage/Navbar";
import MainRoutes from "./routes/MainRoutes";
import ApartmentPage from "./pages/ApartmentPage";
import Body from "./components/homePage/Body";
import Footer from "./components/homePage/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Body />
      <ApartmentPage />
      <Footer />
    </div>
  );
};

export default App;

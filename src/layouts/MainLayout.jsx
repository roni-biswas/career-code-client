import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="bg-base-100 shadow-md">
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="bg-base-200 shadow-md">
        <NavBar />
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

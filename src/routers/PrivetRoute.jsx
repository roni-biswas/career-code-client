import React from "react";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Shared/Loading";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={"/signIn"} state={location.pathname} />;
  }

  return children;
};

export default PrivetRoute;

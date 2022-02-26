import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";


const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

//todoOUTLET COMPONENT IS A CHILD ELEMENT//IT REPRESENTS THE CHILD ELEMENT OF THIS ELEMENT
//* IF WE ARE NOT LOGGED IN WE WILL BE REDIRECTED TO SIGN-IN PAGE

export default PrivateRoute;

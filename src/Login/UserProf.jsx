import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import App from "../App";

const Profile = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated && <App />;
};

export default Profile;

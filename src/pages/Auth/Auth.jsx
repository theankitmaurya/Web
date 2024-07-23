import React from "react";
import AuthNav from "../../components/AuthUI/AuthNav/AuthNav";
import AuthDesc from "../../components/AuthUI/AuthDesc/AuthDesc";

const Auth = () => {
  return (
    <div className="relative grid gap-4">
      <AuthNav />
      <AuthDesc />
    </div>
  );
};

export default Auth;

import React from "react";

import PageHeading from "../components/shared/PageHeading";
import LoginForm from "../components/shared/LoginForm";

const Login = () => {
  return (
    <div>
      <PageHeading heading="Sign In" />
      <LoginForm />
    </div>
  );
};

export default Login;

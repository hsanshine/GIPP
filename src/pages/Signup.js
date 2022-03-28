import React from "react";

import SignupForm from "../components/shared/SignupForm";
import PageHeading from "../components/shared/PageHeading";
const Signup = () => {
  return (
    <div>
      <PageHeading heading="Sign Up" />
      <SignupForm />
    </div>
  );
};

export default Signup;

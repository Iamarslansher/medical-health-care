import React from "react";
import Header from "../../Components/Header/Header";
import LoginForm from "../../Components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

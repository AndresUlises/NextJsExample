import React from "react";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="loginBox">
        <h1>Login</h1>
        <div className="textbox">
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="textbox">
          <input type="password" placeholder="Password"></input>
        </div>
      </div>
      <input className="btn" type="button" value="Sign In"></input>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: url(http://www.baltana.com/files/wallpapers-4/Rain-Background-HD-Wallpapers-14524.jpg) no-repeat;
          background-size: cover;
        }        
      `}</style>
    </div>
  );
};

export default LoginPage;

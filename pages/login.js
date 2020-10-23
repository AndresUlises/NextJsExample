import React from "react";
const LoginPage = () => {
  return (
    <div className="container">
      <div className="loginBox">
        <h1>Login</h1>
        <div className="textBox">
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="textBox">
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="loginBtn">
          <input type="button" value="Sign In"></input>
        </div>
      </div>

      <style jsx>{`
        .container {
          font-family: "Roboto", sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: url(bg.jpg) no-repeat;
          background-size: cover;
        }
        .loginBox {
          color: White;
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .loginBox h1 {          
          font-size: 40px;
        }
        .textBox input {
          color: #333;
          font-size: 20px;
          margin-bottom: 20px;
          padding: 1.5rem 2rem;
          border-radius: 0.2rem;
          border: none;
          width: 90%;
        }
        .loginBtn input {
          background-color: #4caf50;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          display: inline-block;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;

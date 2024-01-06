import React, { createContext, useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "@emotion/react";
import styled from "@emotion/styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (email === "raju@gmail.com" && password === "rajuexam") {
        navigate(`/Dashboard`);
        console.log("Dashboard");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Error logging in. Please try again later.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Login</h2>

      <form className="">
        <div className="">
          <TextField
            type="text"
            variant="standard"
            placeholder=""
            label="Email"
            value={email}
            sx={{ width: "30ch" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <TextField
            type="password"
            variant="standard"
            placeholder=""
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: "30px", marginTop: "30px", width: "30ch" }}
          />
        </div>
        <div className="buttons">
          <Button onClick={handleLogin} type="submit" variant="contained">
            Login
          </Button>
          <div className="signup">
            {" "}
            {/* <p>new User?</p>
            <Button variant="contained" onClick={() => navigate("/SignUp")}>
              Signup
            </Button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

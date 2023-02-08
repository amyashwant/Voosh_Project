import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const user = {
      phone: phone,
      password: password,
    };
   try{
    const res = await axios.post(
      "http://localhost:8000/api/auth/login-user",
      user
    )
    navigate("/adduser");
   }catch(err){

   }
 
    
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Voosh Food Technologies </h3>
          <span className="loginDesc" style={{ marginLeft: "80px" }}>
            Already Registered?
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="phone number"
              type="number"
              required
              className="loginInput"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="loginButton" type="submit">
              Log in
            </button>

            <span className="loginForgot">Forgot Password?</span>
          </form>
        </div>
      </div>
    </div>
  );
}

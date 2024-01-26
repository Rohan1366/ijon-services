import React from 'react'
import { useContext } from "react";
import { loginContext } from '../Context/LoginContext';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
var divStyle = {
    backgroundColor: "black",
    padding: "20px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    
  };
  var astyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "50px",
  };
const Header = () => {
    const { state, fnLoggedOut } = useContext(loginContext);
  return (
    <div style={divStyle}>
      <div>
        <span style={{ fontSize: "25px" }}> Ijona Services</span>
      </div>
      <div>
        <Link style={astyle} to="/">
          Home
        </Link>
       
        <span style={{ marginRight: "30px", color: "green", fontSize: "20px" }}>
          <b> {state.user}</b>
        </span>

        {state.isLoggedIn ? (
          <button
            style={{ marginRight: "50px" }}
            onClick={() => {
              fnLoggedOut();
              toast.success("sucessfully Logout! ")
            }}
          >
            Logout
          </button>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  )
}

export default Header
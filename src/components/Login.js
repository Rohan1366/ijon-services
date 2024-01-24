import { useState, useContext } from "react";
import { loginContext } from "./Context/LoginContext";

var loginStyle = {
  width: "400px",
  padding: "30px",
  borderRadius:"10px",
  boxShadow: "0 0 10px black",
  margin: "50px auto",
  backgroundColor:"white"
};


function Login(props) {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const { fnLoggedIn } = useContext(loginContext);

  const handleForm = (event) => {
    event.preventDefault();
    if (state.name === "user01@gmail.com" && state.password === "123456") {
      // alert("Logged In");
      fnLoggedIn({
        isLoggedIn: true,
        user: "Rohan",
      });
    } else {
      alert("Please Check the Credentials");
    }
  };

  return (
    <div style={{backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/91/46/10/360_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg")',
    height:"89vh",
    paddingTop:"30px"
    }}>
        <div style={loginStyle}>
      <div>
        <h2 style={{textAlign:"left"}}>Login </h2>
        <form onSubmit={handleForm}>
          <div style={{textAlign:"left" ,}}>
            <h4 style={{marginBottom:"10px"}}>Email</h4>
            <input
             style={{width:"90%",height:"25px",borderRadius:"5px",paddingLeft:"10px"}}
              type="text"
              placeholder="Enter Email"
              onChange={(e) => {
                setState({
                  ...state,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <br />
          <div style={{textAlign:"left",marginTop:"-25px"}}>
          <h4 style={{marginBottom:"10px"}}>Password</h4>
            <input
            style={{width:"90%",height:"25px",borderRadius:"5px",paddingLeft:"10px"}}
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setState({
                  ...state,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <br />
          <div style={{textAlign:"left",display:"flex",marginBottom:"20px"}}>
          <input style={{width:"20px",height:"20px",marginTop:"-2px"}} type="checkbox"/>
          <span style={{fontSize:"14px",fontWeight:"bold",marginLeft:"7px"}}>Keep me sign In</span>
          <span style={{fontSize:"14px",fontWeight:"bold",marginLeft:"120px"}}>Forget Password?</span>
          </div>
          <div  style={{textAlign:"left" ,}}>
            <input style={{width:"95%",height:"40px",borderRadius:"5px",
            paddingLeft:"10px",border:"none",backgroundColor:"#00d2ff",color:"white"}} 
            type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
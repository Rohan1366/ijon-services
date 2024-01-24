import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Home } from './components/Home';
import { loginContext } from './components/Context/LoginContext';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Auth from './components/Auth';
import Pagenotfound from './components/Pageoutfound/Pagenotfound';
import { TableProvider } from './components/Context/TableContext';
function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User",
  });

  const fnLoggedIn = (data) => {
    setState(data);
  };

  const fnLoggedOut = () => {
    setState({
      isLoggedIn: false,
      user: "Guest User",
    });
  };
  return (
    <div className="App">
     <loginContext.Provider value={{ state, fnLoggedIn, fnLoggedOut }}>
      <TableProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Auth />} />
          
          
          <Route
            path="/home"
            element={
              state.isLoggedIn ? <Home/> : <Navigate to="/" />
            }
          />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        </TableProvider>
      </loginContext.Provider>
      {/* <Nav /> */}
    </div>
  );
}

export default App;

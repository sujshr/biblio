import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import FormBody from "./components/FormBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

// creating context to share userdata
const UserData = createContext();

function App() {
  // state to store user data 
  const [user, setUser] = useState({});

  // context value containig the user data and set user data function 
  const contextValue = {
    user,
    setUser,
  };
  
  return (
    <>
      <BrowserRouter>
        <UserData.Provider value={contextValue}>
          <NavBar />

          <Routes>
            <Route path="/*" element={<MainBody />} />
            <Route path="/register" element={<FormBody />} />
          </Routes>
        </UserData.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { UserData };

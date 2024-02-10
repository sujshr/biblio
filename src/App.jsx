import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import FormBody from "./components/FormBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
const UserData = createContext();

function App() {
  const [user, setUser] = useState({});
  const contextValue = {
    user,
    setUser,
  };
  console.log(user);
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

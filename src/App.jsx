import "./App.css";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import FormBody from "./components/FormBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/*" element={<MainBody />} />
          <Route path="/register" element={<FormBody />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

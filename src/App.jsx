import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import Navbar1 from "./components/Navbar1";
import Footer1 from "./components/Footer1";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </>
  );
}

export default App;

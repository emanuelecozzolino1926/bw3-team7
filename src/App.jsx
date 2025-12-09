import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePage from "./components/ProfilePage";
import Navbar1 from "./components/Navbar1";
import Footer1 from "./components/Footer1";

function App() {
  return (
    <>
    <Navbar1/>
    <ProfilePage/>
      <Footer1/>
    </>
  );
}

export default App;

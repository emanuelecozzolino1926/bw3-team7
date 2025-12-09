import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePage from "./components/ProfilePage";
import Attivita from "./components/Attivita";
import Esperienza from "./components/Esperienza";
import Formazione from "./components/Formazione"
import LicenzeCertificazioni from "./components/LicenzeCertificazioni";
import Volontariato from "./components/Volontariato";

function App() {
  return (
    <>
      <ProfilePage />
      <Attivita />
      <Esperienza />
      <Formazione />
      <LicenzeCertificazioni />
      <Volontariato />
    </>
  );
}

export default App;

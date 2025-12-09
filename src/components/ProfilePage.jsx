import { Container } from "react-bootstrap";
import InformationProfile from "./InformationProfile";
import Banner from "./Banner";
import Attivita from "./components/Attivita";
import Esperienza from "./components/Esperienza";
import Formazione from "./components/Formazione"
import LicenzeCertificazioni from "./components/LicenzeCertificazioni";
import Volontariato from "./components/Volontariato";

const ProfilePage = function () {
  return (
    <>
      <Container>
        <Banner />
        <InformationProfile />
        <Attivita />
        <Esperienza />
        <Formazione />
        <LicenzeCertificazioni />
        <Volontariato />
      </Container>
    </>
  );
};
export default ProfilePage;

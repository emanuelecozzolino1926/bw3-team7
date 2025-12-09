import { Container } from "react-bootstrap";
import InformationProfile from "./InformationProfile";
import Banner from "./Banner";
import Attivita from "./Attivita";
import Esperienza from "./Esperienza"
import Formazione from "./Formazione"
import LicenzeCertificazioni from "./LicenzeCertificazioni";
import Volontariato from "./Volontariato";

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

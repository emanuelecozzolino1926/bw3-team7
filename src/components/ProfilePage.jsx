import { Container, Row } from "react-bootstrap";
import InformationProfile from "./InformationProfile";
import Banner from "./Banner";
import Attivita from "./Attivita";
import Esperienza from "./Esperienza";
import Formazione from "./Formazione";
import LicenzeCertificazioni from "./LicenzeCertificazioni";
import Volontariato from "./Volontariato";
import ColonnaDestra from "./ColonnaDestra";

const ProfilePage = function () {
  return (
    <>
      <Container className="p-0 p-md-2">
        <Row>
          <div className="col col-12  col-xl-8 p-0">
            <Banner />
            <InformationProfile />
            <Attivita />
            <Esperienza />
            <Formazione />
            <LicenzeCertificazioni />
            <Volontariato />
          </div>
          <div className="col d-none d-xl-block col-xl-4">
            <ColonnaDestra />
          </div>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;

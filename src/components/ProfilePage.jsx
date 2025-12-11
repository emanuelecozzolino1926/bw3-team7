import { Container, Row } from "react-bootstrap";
import InformationProfile from "./InformationProfile";
import Banner from "./Banner";
import Attivita from "./Attivita";
import Esperienza from "./Esperienza";
import Formazione from "./Formazione";
import LicenzeCertificazioni from "./LicenzeCertificazioni";
import Volontariato from "./Volontariato";
import ColonnaDestra from "./ColonnaDestra";
import Compentenza from "./Compentenza";
import Referenza from "./Referenza";
import Pubblicazioni from "./Pubblicazioni";
import Lingue from "./Lingue";
import Interessi from "./Interessi";

const ProfilePage = function () {
  return (
    <>
      <Container className="p-0 p-md-2">
        <Row className="mt-3">
          <div className="col col-12 col-xl-9 p-0">
            <Banner />
            <InformationProfile />
            <Attivita />
            <Esperienza />
            <Formazione />
            <LicenzeCertificazioni />
            <Volontariato />
            <Compentenza />
            <Referenza />
            <Pubblicazioni />
            <Lingue />
            <Interessi />
          </div>
          <div className="col d-none d-xl-block col-xl-3">
            <hr className="m-0 mb-2" />
            <ColonnaDestra title="Altri profili per te" people={5} />
            <ColonnaDestra title="Esplora i profili Premium" people={5} />
            <ColonnaDestra title="Persone che potresti conoscere" people={3} />
          </div>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;

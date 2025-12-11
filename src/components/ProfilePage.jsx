import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import InformationProfile from "./ProfilePage/InformationProfile";
import Banner from "./ProfilePage/Banner";
import Attivita from "./ProfilePage/Attivita";
import Esperienza from "./ProfilePage/Esperienza";
import Formazione from "./ProfilePage/Formazione";
import LicenzeCertificazioni from "./ProfilePage/LicenzeCertificazioni";
import Volontariato from "./ProfilePage/Volontariato";
import ColonnaDestra from "./ColonnaDestra";
import Compentenza from "./ProfilePage/Compentenza";
import Referenza from "./ProfilePage/Referenza";
import Pubblicazioni from "./ProfilePage/Pubblicazioni";
import Lingue from "./ProfilePage/Lingue";
import Interessi from "./ProfilePage/Interessi";

const ProfilePage = function () {
  const { userId } = useParams();
  return (
    <>
      <Container className="p-0 p-md-2">
        <Row className="mt-3">
          <div className="col col-12 col-xl-9 p-0">
            <Banner userId={userId} />
            <InformationProfile userId={userId} />
            <Attivita />
            <Esperienza userId={userId} />
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
            <ColonnaDestra title="Esplora i profili Premium" people={4} />
            <ColonnaDestra title="Persone che potresti conoscere" people={5} />
          </div>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;

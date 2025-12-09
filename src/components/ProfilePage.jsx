import { Container } from "react-bootstrap";
import InformationProfile from "./InformationProfile";
import Banner from "./Banner";

const ProfilePage = function () {
  return (
    <>
      <Container>
        <Banner />
        <InformationProfile />
      </Container>
    </>
  );
};
export default ProfilePage;

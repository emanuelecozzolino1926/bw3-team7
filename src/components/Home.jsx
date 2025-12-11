import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import LeftCards from "./HomePage/HomeCards/LeftCard";
import ColonnaDestra from "./ColonnaDestra";
import Footer1 from "./Footer1";

const Home = function () {
  return (
    <>
      <Container>
        <Row className="ms-2 primaHome mt-lg-5  ">
          <Col className="col-md-4 col-lg-3 ms-2 ">
            <LeftCards />
          </Col>
          <Col className="col-lg-5 col-md-8"></Col>
          <Col className="d-none d-lg-block col-lg-3 ">
            <ColonnaDestra title="Today's puzzle" people={1} />
            <ColonnaDestra title="Add your feed" people={3} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;

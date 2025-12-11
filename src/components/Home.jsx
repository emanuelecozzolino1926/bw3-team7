import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import LeftCards from "./HomePage/HomeCards/LeftCard";
import ColonnaDestra from "./ColonnaDestra";

const Home = function () {
  return (
    <>
      <Container>
        <Row className="ms-2 primaHome mt-lg-5  ">
          <Col className="col-md-4 col-lg-3 ms-2 ">
            <LeftCards />
          </Col>
          <Col className="col-lg-5 col-md-8"></Col>
          <Col className="d-none d-lg-flex col-lg-4 "></Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;

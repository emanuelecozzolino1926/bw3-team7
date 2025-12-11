import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import LeftCards from "./HomePage/HomeCards/LeftCard";
import CreatePost from "./HomePage/HomeCards/CreatePost";
import ColonnaDestra from "./ColonnaDestra";
import FooterHome from "./HomePage/FooterHome";
import Consigliati from "./HomePage/Consigliati";

const Home = function () {
    return (
        <>
            <Container>
                <Row className="ms-2 primaHome mt-xs-5  mt-sm-5  mt-md-5  mt-lg-5  mt-xl-5">
                    <Col className="col-md-4 col-lg-3 ms-2 ">
                        <LeftCards />
                    </Col>
                    <Col className="col-lg-5 col-md-7">
                        <CreatePost />
                        <Consigliati people={3} title="Consigli per te" />
                    </Col>
                    <Col className="d-none d-lg-block col-lg-3 ">
                        <ColonnaDestra title="Today's puzzle" people={1} />
                        <ColonnaDestra title="Add your feed" people={3} />
                        <FooterHome />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Home;

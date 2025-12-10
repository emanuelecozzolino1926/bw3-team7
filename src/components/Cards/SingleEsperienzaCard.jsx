import { Container, Row, Col, Button } from "react-bootstrap";

const SingleEsperienzaCard = (props) => {
  return (
    <Container className="mb-3">
      <Row className="d-flex justify-content-center">
        <Col xs={2} md={1}>
          <div>
            <img
              src={props.exp.image || "https://placedog.net/50/50"}
              alt={props.exp.company || "logo compagnia"}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </Col>

        <Col xs={9} md={10}>
          <div className="text-start">
            <p className="fw-bold m-0">{props.exp.role}</p>
            <p className="m-0">
              <i class="bi bi-building-fill"> </i>
              {props.exp.company} -{" "}
              {props.exp.description || "Nessuna descrizione inserita"}
            </p>
            <p className="m-0"></p>
            <p className="text-secondary m-0">
              {props.exp.startDate} <i class="bi bi-arrow-right-short"></i>
              {props.exp.endDate || "Attuale"}
            </p>
            <p className="text-secondary m-0">{props.exp.area}</p>
          </div>
        </Col>
        <Col xs={1} md={1}>
          <Button className="me-5 text-dark fs-4 border-0 bg-white">
            <i className="bi bi-pencil-square"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleEsperienzaCard;

import { Container, Row, Button } from "react-bootstrap";

const SingleEsperienzaCard = (props) => {
  const { exp, onEdit } = props;

  const formatDate = (isoString) => {
    if (!isoString) return "Attuale";

    const date = new Date(isoString);

    return date.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Container className="mb-3">
      <Row className="d-flex justify-content-center">
        <div className="d-flex">
          <div className="me-2">
            <img
              src={exp.image || "https://placedog.net/50/50"}
              alt={exp.company || "logo compagnia"}
              style={{ width: "50px", height: "50px" }}
            />
          </div>

          <div className="text-start">
            <p className="fw-bold m-0">{exp.role}</p>
            <p className="m-0">
              <i className="bi bi-building-fill"> </i>
              {exp.company} -{" "}
              {exp.description || "Nessuna descrizione inserita"}
            </p>
            <p className="text-secondary m-0">
              {formatDate(exp.startDate)}
              <i className="bi bi-arrow-right-short"></i>
              {exp.endDate ? formatDate(exp.endDate) : "Attuale"}
            </p>
            <p className="text-secondary m-0">{exp.area}</p>
          </div>

          <div className="flex-grow-1 text-end">
            <Button
              className="me-5 text-dark fs-4 border-0 bg-white "
              onClick={onEdit}
            >
              <i className="bi bi-pencil-square"></i>
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default SingleEsperienzaCard;

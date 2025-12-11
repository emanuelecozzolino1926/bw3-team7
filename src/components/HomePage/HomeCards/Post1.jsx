import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

function Post1() {
  return (
    <Card className="mt-2 border-1 border border-secondary">
      <Card.Body>

  <Row className="align-items-start">
    <Col xs="auto">
      <img 
        src="https://www.nosilence.it/wp-content/uploads/2019/02/Pupo.jpg" 
        alt="foto Pupo" 
        className="rounded-circle"
        style={{ width: '55px', height: '55px', objectFit: 'cover' }}
      />
    </Col>
    <Col>
      <p className="m-0 fw-bold">Enzo Ghinazzi</p>
      <p className="m-0 text-muted" style={{ fontSize: "0.9rem" }}>
        Cantante | Artista internazionale
      </p>
      <p className="text-muted" style={{ fontSize: "0.8rem" }}> 3g • </p>
    </Col>
    <Col xs="auto">
      <button 
        className="btn btn-outline-primary btn-sm fw-semibold rounded-4"
      >
        + Segui
      </button>
    </Col>
  </Row>
  <p className="mt-2">
    Il Tour è stato fantastico, #VivaPupone
  </p>
  <img 
    src="https://lavoce.hr/wp-content/uploads/2023/12/PUPO_30.jpg" 
    alt="foto concerto" 
    className="img-fluid rounded"
  />

</Card.Body>

      <Card.Footer className="bg-white">

  <Row xs={4} className="text-center mt-2">
    <Col>
      <i className="bi bi-hand-thumbs-up"></i>
      <div style={{ fontSize: "0.9rem" }}>Consiglia</div>
    </Col>
    <Col>
      <i className="bi bi-chat-left-dots"></i>
      <div style={{ fontSize: "0.9rem" }}>Commenta</div>
    </Col>
    <Col>
      <i className="bi bi-shuffle"></i>
      <div style={{ fontSize: "0.9rem" }}>Diffondi il post</div>
    </Col>
    <Col>
      <i className="bi bi-send-fill"></i>
      <div style={{ fontSize: "0.9rem" }}>Invia</div>
    </Col>
  </Row>
  
</Card.Footer>


    </Card>
  );
}

export default Post1;

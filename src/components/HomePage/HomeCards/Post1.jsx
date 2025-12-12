import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function Post1() {
  const [connected, setConnected] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commenti, setCommenti] = useState([]);
  const toggleButton = () => {
    setConnected((prev) => !prev);
  };
  const openCommenti = () => {
    setShowCommentBox((prev) => !prev);
  };
  const postaCommento = () => {
    if (commentText.trim() === "") return;
    setCommenti((prev) => [...prev, commentText]);
    setCommentText("");
  };
  return (
    <Card className="mt-2 border-1 border border-secondary">
      <Card.Body>
        <Row className="align-items-start">
          <Col xs="auto">
            <img
              src="https://www.nosilence.it/wp-content/uploads/2019/02/Pupo.jpg"
              alt="foto Pupo"
              className="rounded-circle"
              style={{ width: "55px", height: "55px", objectFit: "cover" }}
            />
          </Col>
          <Col>
            <p className="m-0 fw-bold">Enzo Ghinazzi</p>
            <p className="m-0 text-muted" style={{ fontSize: "0.9rem" }}>
              Cantante | Artista internazionale
            </p>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              {new Date().getDay()} giorni fa
            </p>
          </Col>
          <Col xs="auto">
            <button
              className="btn btn-outline-primary btn-sm fw-semibold rounded-4"
              onClick={toggleButton}>
              {connected ? <i className="bi bi-check2"> Seguito</i> : "+ Segui"}
            </button>
            {/* Funziona a intermittenza, da aggiustare!!! */}
          </Col>
        </Row>
        <p className="mt-2">Il Tour è stato fantastico, #VivaPupone</p>
        <img
          src="https://lavoce.hr/wp-content/uploads/2023/12/PUPO_30.jpg"
          alt="foto concerto"
          className="img-fluid rounded"
        />
      </Card.Body>
      {commenti.length > 0 && (
        <div className="border-top p-2">
          {commenti.map((c, i) => (
            <p key={i} className="m-0">
              {c}
            </p>
          ))}
        </div>
      )}
      {showCommentBox && (
        <div className="border-top p-2">
          <textarea
            className="form-control"
            placeholder="Scrivi un commento..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}></textarea>
          <button
            className="btn btn-primary btn-sm mt-2"
            onClick={postaCommento}>
            Posta
          </button>
        </div>
      )}
      <Card.Footer className="bg-white">
        <Row xs={4} className="text-center mt-2">
          <Col>
            <i className="bi bi-hand-thumbs-up"></i>
            <div style={{ fontSize: "0.9rem" }}>Consiglia</div>
          </Col>
          <Col>
            <div
              className="d-flex flex-column"
              style={{ fontSize: "0.9rem", cursor: "pointer" }}>
              <i className="bi bi-chat-left-dots"></i>
              <span onClick={openCommenti}>Commenta</span>
            </div>
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

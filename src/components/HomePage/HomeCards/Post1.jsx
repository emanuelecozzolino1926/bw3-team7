import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../../../assets/ButtonsHover.css";

function Post1({ posts }) {
  const [connected, setConnected] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commenti, setCommenti] = useState([]);
  const [liked, setLiked] = useState(false);

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

  const apiUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";
  const [profileData, setProfileData] = useState(null);

  const getBanner = () => {
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Collegato al server ${response.status}`);
          return response.json();
        } else {
          throw new Error(
            `Errore nella connessione al server ${response.status}`
          );
        }
      })
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Card key={post._id} className="mt-2 border-1 border border-secondary">
          <Card.Body>
            <Row className="align-items-start">
              <Col xs="auto">
                <img
                  src={profileData?.image}
                  alt="foto profilo"
                  className="rounded-circle"
                  style={{ width: "55px", height: "55px", objectFit: "cover" }}
                />
              </Col>
              <Col>
                <p className="m-0 fw-bold">{post.username}</p>
                <p className="m-0 text-muted" style={{ fontSize: "0.9rem" }}>
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </Col>
              <Col xs="auto">
                <button
                  className="btn btn-outline-primary btn-sm fw-semibold rounded-4"
                  onClick={toggleButton}
                >
                  {connected ? (
                    <i className="bi bi-check2"> Seguito</i>
                  ) : (
                    "+ Segui"
                  )}
                </button>
              </Col>
            </Row>
            <p className="mt-2">{post.text}</p>
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
                onChange={(e) => setCommentText(e.target.value)}
              ></textarea>
              <button
                className="btn btn-primary btn-sm mt-2"
                onClick={postaCommento}
              >
                Posta
              </button>
            </div>
          )}
          <Card.Footer className="bg-white">
            <Row xs={4} className="text-center mt-2">
              <Col>
                <div
                  onClick={() => setLiked(!liked)}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={
                      liked
                        ? "bi bi-hand-thumbs-up-fill"
                        : "bi bi-hand-thumbs-up"
                    }
                    style={{
                      color: liked ? "blue" : "gray",
                    }}
                  ></i>
                </div>
                <div style={{ fontSize: "0.9rem" }}>Consiglia</div>
              </Col>
              <Col>
                <div
                  onClick={openCommenti}
                  className="d-flex flex-column"
                  style={{ fontSize: "0.9rem", cursor: "pointer" }}
                >
                  <i className="bi bi-chat-left-dots"></i>
                  <span>Commenta</span>
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
      ))}
    </>
  );
}

export default Post1;

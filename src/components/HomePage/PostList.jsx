import Card from "react-bootstrap/Card";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const PostList = ({ posts, setPosts }) => {
  const apiUrl = "https://striveschool-api.herokuapp.com/api/posts/";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";

  const apiProfile = "https://striveschool-api.herokuapp.com/api/profile/me";
  const [profileData, setProfileData] = useState(null);

  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostEdit, setShowPostEdit] = useState(false);
  const [postText, setPostText] = useState("");

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
  const getPostList = () => {
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Connsso al server post ${response.status}`);
          return response.json();
        } else {
          throw new Error(
            `Non sono riuscito a connettermi al server post ${response.status}`
          );
        }
      })
      .then((data) => {
        console.log(data);
        const reverseUwu = [...data].reverse().slice(0, 50);
        setPosts(reverseUwu);
      })
      .catch((error) => {
        console.log(`Il server non è raggiungibile ${error}`);
      });
  };

  const getBanner = () => {
    fetch(apiProfile, {
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

  const openPostModal = (post) => {
    setSelectedPost(post);
    setPostText(post.text);
    setShowPostEdit(true);
  };

  const closePostModal = () => setShowPostEdit(false);

  const putPost = () => {
    fetch(`${apiUrl}${selectedPost._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: postText }),
    })
      .then((response) => {
        if (response.ok) {
          closePostModal();
          getPostList();
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePost = () => {
    fetch(`${apiUrl}${selectedPost._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          closePostModal();
          getPostList();
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBanner();
  }, []);

  useEffect(() => {
    getPostList();
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
                <p className="text-muted" style={{ fontSize: "0.8rem" }}>
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
                <Button
                  variant="outline-secondary border-0 m2"
                  onClick={() => openPostModal(post)}
                >
                  <i className="bi bi-pencil-square"></i>
                </Button>
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
      <Modal show={showPostEdit} onHide={closePostModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <textarea
            className="form-control"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="danger" onClick={deletePost}>
            Elimina
          </Button>
          <div>
            <Button
              className="m-2"
              variant="secondary"
              onClick={closePostModal}
            >
              Annulla
            </Button>
            <Button variant="primary" onClick={putPost}>
              Salva
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostList;

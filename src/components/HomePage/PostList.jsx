import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const PostList = () => {
  const apiUrl = "https://striveschool-api.herokuapp.com/api/posts/";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";

  const apiProfile = "https://striveschool-api.herokuapp.com/api/profile/me";
  const [profileData, setProfileData] = useState(null);

  const [posts, setPosts] = useState([]);

  const [connected, setConnected] = useState({});
  const [showCommentBox, setShowCommentBox] = useState({});
  const [commentText, setCommentText] = useState({});
  const [commenti, setCommenti] = useState({});
  const [liked, setLiked] = useState({});

  const toggleButton = (type, id) => {
    type((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

/*   const likeButton = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openCommenti = (id) => {
    setShowCommentBox((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }; */

  const postaCommento = (id) => {
    const text = commentText[id]?.trim();
    if (!text) return;

    setCommenti((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), text],
    }));

    setCommentText((prev) => ({
      ...prev,
      [id]: "",
    }));
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
                  onClick={() => toggleButton(setConnected, post._id)}>
                  {connected[post._id] ? (
                    <i className="bi bi-check2"> Seguito</i>
                  ) : (
                    "+ Segui"
                  )}
                </button>
              </Col>
            </Row>

            <p className="mt-2">{post.text}</p>
          </Card.Body>

          {commenti[post._id]?.length > 0 && (
            <div className="border-top p-2">
              {commenti[post._id].map((c, i) => (
                <p key={i} className="m-0">
                  {c}
                </p>
              ))}
            </div>
          )}

          {showCommentBox[post._id] && (
            <div className="border-top p-2">
              <textarea
                className="form-control"
                placeholder="Scrivi un commento..."
                value={commentText[post._id] || ""}
                onChange={(e) =>
                  setCommentText((prev) => ({
                    ...prev,
                    [post._id]: e.target.value,
                  }))
                }></textarea>
              <button
                className="btn btn-primary btn-sm mt-2"
                onClick={() => postaCommento(post._id)}>
                Posta
              </button>
            </div>
          )}

          <Card.Footer className="bg-white">
            <Row xs={4} className="text-center mt-2">
              <Col>
                <div
                  onClick={() => toggleButton(setLiked, post._id)}
                  style={{ cursor: "pointer" }}>
                  <i
                    className={
                      liked[post._id]
                        ? "bi bi-hand-thumbs-up-fill"
                        : "bi bi-hand-thumbs-up"
                    }
                    style={{
                      color: liked[post._id] ? "blue" : "gray",
                    }}></i>
                </div>
                <div style={{ fontSize: "0.9rem" }}>Consiglia</div>
              </Col>

              <Col>
                <div
                  onClick={() => toggleButton(setShowCommentBox, post._id)}
                  className="d-flex flex-column"
                  style={{ fontSize: "0.9rem", cursor: "pointer" }}>
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
};

export default PostList;

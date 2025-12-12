import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../../../assets/ButtonsHover.css";

function CreatePost({ setPosts }) {
  const [profileData, setProfileData] = useState(null);
  const [postData, setPostData] = useState(null);

  const [post, setPost] = useState({
    text: "",
  });

  const apiUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";

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

  const apiPost = "https://striveschool-api.herokuapp.com/api/posts/";

  const savePost = () => {
    fetch(`${apiPost}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: post.text,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Server connesso ${response.status}`);
          return response.json();
        } else {
          throw new Error(
            `Errore nella connessione del server ${response.status}`
          );
        }
      })
      .then((expData) => {
        setPostData(expData);
        setPosts((prev) => [expData, ...prev]);
        setPost({ text: "" });
        console.log(expData);
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };

  useEffect(() => {
    getBanner();
  }, []);
  return (
    <Card className=" w-100 border border-secondary rounded-3">
      <Card.Body className="d-flex align-items-center px-3 py-0">
        <div className="d-inline-block h-100 text-start">
          <img
            style={{ width: "55px", height: "55px" }}
            src={profileData?.image}
            alt="pic-profile"
            className="rounded-circle"
          />
        </div>
        <div className="text-start flex-grow-1 ms-2">
          <Form className="d-inline mx-3 ">
            <Row>
              <Col xs="auto" className="flex-grow-1 ">
                <Form.Control
                  type="text"
                  placeholder="Crea un post"
                  value={post.text}
                  onChange={(e) => setPost({ ...post, text: e.target.value })}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </Card.Body>
      <div className="d-flex justify-content-evenly mb-2">
        <Button
          variant="link"
          className="referenza-buttons text-decoration-none text-dark fs-6 py-2 px-3 ms-3 border-0 rounded-0 mt-0 fs-6 fw-bold rounded-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-youtube me-2 text-success"
            viewBox="0 0 16 16"
          >
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
          </svg>
          Video
        </Button>
        <Button
          variant="link"
          className="referenza-buttons text-decoration-none text-dark fs-6 py-2 px-3 ms-3 border-0 rounded-0 mt-0 fs-6 fw-bold rounded-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-card-image me-2 text-primary"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
          </svg>
          Foto
        </Button>
        <Button
          variant="link"
          onClick={savePost}
          className="referenza-buttons text-decoration-none text-dark fs-6 py-2 px-3 ms-3 border-0 rounded-0 mt-0 fs-6 fw-bold rounded-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-blockquote-left me-2 text-danger"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm.79-5.373q.168-.117.444-.275L3.524 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562Q2 7.587 2 7.969q0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282q.036-.305.123-.498a1.4 1.4 0 0 1 .252-.37 2 2 0 0 1 .346-.298zm2.167 0q.17-.117.445-.275L5.692 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562q-.165.31-.164.692 0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282a1.8 1.8 0 0 1 .118-.492q.087-.194.257-.375a2 2 0 0 1 .346-.3z" />
          </svg>
          Scrivi un articolo
        </Button>
      </div>
    </Card>
  );
}

export default CreatePost;

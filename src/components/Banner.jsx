import "../assets/banner.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Banner = () => {
  const [profileData, setProfileData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="card">
      <div className="img-container">
        <div className="position-relative">
          <img
            src="https://placebear.com/300/100"
            alt="banner-img"
            className="w-100"
          />
          <img src={profileData?.image} alt="profile-img" id="pic" />
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between gap-5">
          <div>
            <div className="d-flex gap-2 align-items-center">
              <h5 className="card-title m-0 fs-2 mb-2">
                {`${profileData?.name} ${profileData?.surname}`}
              </h5>
              <i className="bi bi-volume-up-fill fs-3"></i>
              <p className="m-0 text-muted">he/him</p>
            </div>
            <p className="card-text m-0">{profileData?.title}</p>
            <p className="card-text m-0 d-xl-none">EPICODE .</p>
            <p className="card-text m-0 text-muted">
              {profileData?.area}
              <Button
                className="border-0 bg-white"
                style={{ color: "#0A66C2", fontWeight: "bold" }}
                onClick={handleShow}>
                Contact info
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Informazioni Contatto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <i className="bi bi-envelope-at-fill"> </i>
                  {profileData?.email}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Chiudi
                  </Button>
                </Modal.Footer>
              </Modal>
            </p>
          </div>
        </div>
        <p>500+ connections</p>
        <div className="d-flex gap-2 align-items-center my-3">
          <button
            className="px-3 rounded-5 border-0 py-2 text-light fw-bold"
            id="connect">
            <i className="bi bi-telegram me-1"></i>Messaggio
          </button>
          <button className="px-3 rounded-5 py-2 fw-bold" id="message">
            <i className="bi bi-person-plus-fill"></i>  Segui
          </button>
          <button className="px-3 rounded-5 py-2 border border-dark fw-bold d-md-none">
            ...
          </button>
          <button className="px-3 rounded-5 py-2 border border-dark fw-bold d-none d-md-block">
            Altro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

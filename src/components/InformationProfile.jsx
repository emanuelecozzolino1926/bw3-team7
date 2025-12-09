import { Col, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const InformationProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = "https://striveschool-api.herokuapp.com/api/profile";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";

  const getAbout = () => {
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
        console.log(data);
        setProfileData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      <Row className="my-3">
        <Col
          xs={12}
          md={10}
          xl={8}
          className="bg-white border border-2 rounded-2 p-3"
        >
          <h5 className="fw-normal">Informazioni</h5>
          {isLoading ? (
            <Spinner animation="border" variant="primary" />
          ) : profileData ? (
            <div>
              <p>{profileData.bio}</p>
            </div>
          ) : (
            <p>Impossibile caricare le informazioni del profilo.</p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default InformationProfile;

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

function CreatePost() {
   const [profileData, setProfileData] = useState(null);
         
        
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
    <Card>
      <Card.Body>
        
        <img style={{width:'55px',height:'55px'}}
            src={profileData?.image}
            alt="pic-profile"
            className="rounded-circle"
          /></Card.Body>
         <Form className='d-inline  mx-3 '>
        <Row>
          <Col xs="auto">
            <Form.Control id='search'
              type="text"
              placeholder="Crea un post"
              className=" mr-sm-2 rounded-pill "
            />
            
          </Col>
          </Row>
          </Form>
    </Card>
  );
}

export default CreatePost;
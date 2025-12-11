import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const LeftCards = function (){
     const [profileData, setProfileData] = useState(null);
      const [showAdd, setShowAdd] = useState(false);
      const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "",
  });
        const userId = "6937fe45d322f500151076c2";
      
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
         const handleSaveExperience = () => {
    fetch(`${apiUrl}${userId}/experiences`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experience),
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
        setShowAdd(false);
        setExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
          image: "",
        });
        console.log(expData);
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };
   
    return(
<><div className="card  border border-secondary ms-4 rounded-3">
      <div className="img-container position-relative " style={{height:'100px'}}>
       <div style={{position:'absolute',top:'60px',left:'0px'}}>
        <img
          src={profileData?.image}
          alt="profile-img"
          id="pic"
          style={{ width: "80px", height: "80px" }}
          
        /></div>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center gap-5">
          <div>
            <div className="d-flex gap-2 align-items-center flex-wrap">
              <h5 className="card-title m-0 fs-2 mb-2">
                 {`${profileData?.name} ${profileData?.surname}`}
              </h5>
            </div>
            <p className="card-text m-0">{profileData?.title}</p>
            <p className="card-text m-0 text-muted">
               {profileData?.area}
            </p>
            <Button
              className="me-2 mt-3 text-dark fs-6 border border-2 border-secondary d-flex flex-row align-items-center border-dashed" style={{backgroundColor:'#e0dcdc'}}
              onClick={() => setShowAdd(true)}
            >
              <i className="bi bi-plus me-3"></i>Esperienza
            </Button>
            <Modal show={showAdd} onHide={() => setShowAdd(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Aggiungi un'esperienza</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="input-role">Role</InputGroup.Text>
                  <Form.Control
                    placeholder="Inserisci ruolo"
                    aria-label="Role"
                    aria-describedby="input-role"
                    value={experience.role}
                    onChange={(e) =>
                      setExperience((prev) => ({
                        ...prev,
                        role: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="input-company">Company</InputGroup.Text>
                  <Form.Control
                    placeholder="Inserisci azienda"
                    aria-label="Company"
                    aria-describedby="input-company"
                    value={experience.company}
                    onChange={(e) =>
                      setExperience((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="input-startDate">
                    Start Date
                  </InputGroup.Text>
                  <Form.Control
                    type="date"
                    aria-label="Start Date"
                    aria-describedby="input-startDate"
                    value={experience.startDate}
                    onChange={(e) =>
                      setExperience((prev) => ({
                        ...prev,
                        startDate: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="input-endDate">End Date</InputGroup.Text>
                  <Form.Control
                    type="date"
                    aria-label="End Date"
                    aria-describedby="input-endDate"
                    value={experience.endDate}
                    onChange={(e) =>
                      setExperience((prev) => ({
                        ...prev,
                        endDate: e.target.value,
                      }))
                    }
                    placeholder="Lascia vuoto se attuale"
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="input-area">Area</InputGroup.Text>
                  <Form.Control
                    placeholder="Inserisci area"
                    aria-label="Area"
                    aria-describedby="input-area"
                    value={experience.area}
                    onChange={(e) =>
                      setExperience((prev) => ({
                        ...prev,
                        area: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="input-description">
                    Description
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Inserisci descrizione"
                    aria-label="Description"
                    aria-describedby="input-description"
                    value={experience.description}
                    onChange={(e) =>
                      setExperience((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="input-image">Immagine</InputGroup.Text>
                  <Form.Control
                    placeholder="Inserisci link immagine"
                    aria-label="image"
                    aria-describedby="input-image"
                    value={experience.image}
                    onChange={(e) =>
                      setExperience((prev) => ({
                        ...prev,
                        image: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowAdd(false)}>
                  Chiudi
                </Button>
                <Button variant="primary" onClick={handleSaveExperience}>
                  Salva
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        </div></div>
       <div className="card border border-secondary ms-4 rounded-3 d-flex flex-column mt-3 "><div className='ms-3'><p className="mb-0 mt-3">500+ connections</p><p className='mt-0'>Espandi la tua rete</p></div></div>
       <div className="card border border-secondary ms-4 rounded-3 d-flex flex-column mt-3 "><div className='ms-3 mt-3'><div className='d-flex flex-row'><i className="bi bi-bookmark-fill"></i><p className='fw-bold ms-3'>Elementi salvati</p></div><div className='d-flex flex-row'><i className="bi bi-people-fill"></i><p className='fw-bold ms-3'>Gruppi</p></div><div className='d-flex flex-row'><i className="bi bi-newspaper"></i><p className='fw-bold ms-3'>Newsletter</p></div><div className='d-flex flex-row'><i className="bi bi-calendar"></i><p className='fw-bold ms-3'>Eventi</p></div></div></div> </>
    )
};
export default LeftCards
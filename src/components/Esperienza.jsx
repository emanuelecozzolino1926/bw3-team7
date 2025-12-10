import SingleEsperienzaCard from "./Cards/SingleEsperienzaCard";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Esperienza = () => {
  const [expData, setExpData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const apiUrl = "https://striveschool-api.herokuapp.com/api/profile/";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";

  const userId = "6937fe45d322f500151076c2";

  const getExp = () => {
    fetch(`${apiUrl}${userId}/experiences`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
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
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setExpData(data);
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };

  const handleSaveExperience = () => {
    fetch(`${apiUrl}${userId}/experiences`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: experience.role,
        company: experience.company,
        startDate: experience.startDate,
        endDate: experience.endDate || null,
        description: experience.description,
        area: experience.area,
        image: experience.image,
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
        getExp(expData);
        handleClose();
        console.log(expData);

        setExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
          image: "",
        });
      })
      .catch((error) => {
        console.log(`Impossibile accedere al server ${error}`);
      });
  };

  useEffect(() => {
    getExp();
  }, []);

  return (
    <Card className="text-center mb-3">
      <Card.Body>
        <Card.Title className="text-start mb-4 d-flex flex-row justify-content-between">
          <h3 className="m-0">Esperienza</h3>
          <div>
            <Button
              className="me-4 text-dark fs-4 border-0 bg-white"
              onClick={handleShow}
            >
              <i className="bi bi-plus-circle"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
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
                <Button variant="secondary" onClick={handleClose}>
                  Chiudi
                </Button>
                <Button variant="primary" onClick={handleSaveExperience}>
                  Salva
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modifica un' esperienza</Modal.Title>
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
                <Button variant="secondary" onClick={handleClose}>
                  Chiudi
                </Button>
                <Button variant="primary" onClick={handleSaveExperience}>
                  Salva
                </Button>
                <Button variant="danger" onClick={handleClose}>
                  Elimina
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card.Title>

        <Card.Text>
          {expData?.map((item) => (
            <div key={item._id}>
              <SingleEsperienzaCard exp={item} />
              <hr />
            </div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Esperienza;

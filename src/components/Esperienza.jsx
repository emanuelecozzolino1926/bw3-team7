import { useEffect, useState } from "react";
import SingleEsperienzaCard from "./Cards/SingleEsperienzaCard";
import Card from "react-bootstrap/Card";

const Esperienza = () => {
  const [expData, setExpData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = "https://striveschool-api.herokuapp.com/api/profile/";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";

  const getExp = () => {
    fetch(`${apiUrl}6937e1e9d322f500151076b1/experiences`, {
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

  useEffect(() => {
    getExp();
  }, []);

  return (
    <Card className="text-center mb-3">
      <Card.Body>
        <Card.Title className="text-start mb-4">
          <h3 className="m-0">Esperienza</h3>
        </Card.Title>
        <Card.Text className="">
          <SingleEsperienzaCard />
          <hr />
          <SingleEsperienzaCard />
          <hr />
          <SingleEsperienzaCard />
          <hr />
          <SingleEsperienzaCard />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Esperienza;

import SingleEsperienzaCard from './Cards/SingleEsperienzaCard';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from "react";

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
                {/*  */}
                <Card.Title className="text-start mb-4 d-flex flex-row justify-content-between">
                    <h3 className="m-0">Esperienza</h3>
                    <div>
                        <a href="#" className="me-4 text-dark fs-4"><i class="bi bi-plus-lg"></i></a>
                        <a href="#" className="me-5 text-dark fs-4"><i class="bi bi-pen" ></i></a>
                    </div>
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
        </Card >
    )
}

export default Esperienza;

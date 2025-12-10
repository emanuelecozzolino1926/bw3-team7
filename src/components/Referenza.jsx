import SingleReferenzaCard from './Cards/SingleReferenzaCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import "../assets/ButtonsHover.css";

const Referenza = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Referenze</h3>
                    <div className="border-bottom border-1 border-secondary">
                        <Button variant="link" className="referenza-buttons text-decoration-none text-dark fs-6 py-2 pe-3 ps-0 border-0 rounded-0">Ricevute</Button>
                        <Button variant="link" className="referenza-buttons text-decoration-none text-dark fs-6 py-2 px-3 ms-2 border-0 rounded-0">Scritte</Button>
                    </div>
                </Card.Title>
                <SingleReferenzaCard />
                <hr />

                <SingleReferenzaCard />
            </Card.Body>
        </Card>
    )
}

export default Referenza
import SingleReferenzaCard from './Cards/SingleReferenzaCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import "../assets/ButtonsHover.css";

const Referenza = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body className="p-0">
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0 ms-3 mt-3">Referenze</h3>
                    <div className="border-bottom border-1 border-secondary">
                        <Button variant="link" className="referenza-buttons text-decoration-none text-dark fs-6 py-2 px-3 ms-3 border-0 rounded-0">Ricevute</Button>
                        <Button variant="link" className="referenza-buttons text-decoration-none text-dark fs-6 py-2 px-3 ms-3 border-0 rounded-0">Scritte</Button>
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
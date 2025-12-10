import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import SingleInteressiCard from './Cards/SingleInteressiCard';
import "../assets/ButtonsHover.css";


const Interessi = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Interessi</h3>
                    <div className="border-bottom border-1 border-secondary">
                        <Button variant="link" className="referenza-buttons text-decoration-none text-dark fs-6 py-2 pe-3 ps-0 border-0 rounded-0">Aziende</Button>
                        <Button variant="link" className="referenza-buttons text-decoration-none text-dark fs-6 py-2 px-3 ms-2 border-0 rounded-0">Gruppi</Button>
                        <Button variant="link" className="referenza-buttons text-decoration-none text-dark fs-6 py-2 px-3 ms-2 border-0 rounded-0">Scuole o università</Button>
                    </div>
                </Card.Title>
                <Card.Text>
                    <SingleInteressiCard />
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="light" className="w-100 text-black bg-light border-0 rounded-0">Mostra tutte le aziende <i class="bi bi-arrow-right-short"></i></Button>
            </Card.Footer>
        </Card>
    )
}

export default Interessi
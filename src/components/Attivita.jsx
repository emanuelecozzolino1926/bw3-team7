import SingleAttivitaCard from './Cards/SingleAttivitacard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Attivita = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Attività</h3>
                    <p className="text-secondary m-0 mb-3">600 follower</p>
                </Card.Title>
                <SingleAttivitaCard />
                <SingleAttivitaCard />
                <SingleAttivitaCard />
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="light" className="w-100 text-black bg-light border-0 rounded-0">Mostra tutte le attività<i className="bi bi-arrow-right-short"></i></Button>
            </Card.Footer>
        </Card>
    )
}

export default Attivita
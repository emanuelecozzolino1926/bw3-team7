import SinglePubblicazioniCard from './Cards/SinglePubblicazioniCard';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Pubblicazioni = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0"> Pubblicazioni</h3>
                </Card.Title>
                <Card.Text>
                    <SinglePubblicazioniCard />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Pubblicazioni
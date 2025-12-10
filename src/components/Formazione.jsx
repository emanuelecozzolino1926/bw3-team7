import SingleFormazioneCard from './Cards/SingleFormazioneCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Formazione = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Formazione</h3>
                </Card.Title>
                <Card.Text>
                    <SingleFormazioneCard />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Formazione
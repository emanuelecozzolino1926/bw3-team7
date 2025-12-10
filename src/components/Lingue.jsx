import SingleLinguaCard from './Cards/SingleLinguaCard';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Lingue = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0"> Lingue</h3>
                </Card.Title>
                <SingleLinguaCard />
                <hr />
                <SingleLinguaCard />
            </Card.Body>
        </Card>
    )
}

export default Lingue
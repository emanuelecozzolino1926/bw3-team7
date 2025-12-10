import SingleReferenzaCard from './Cards/SingleReferenzaCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Referenza = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Referenze</h3>
                    
                </Card.Title>
                <Card.Text className="">
                    <SingleReferenzaCard />
                    <hr />
                    
                    <SingleReferenzaCard />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Referenza
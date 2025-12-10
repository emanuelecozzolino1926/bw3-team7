import SingleVolontariatoCard from './Cards/SingleVolontariatoCard';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Volontariato = () => {
    return (
        <Card className="text-center mb-3">
            <Card.Body>
                <Card.Title className="text-start mb-4">
                    <h3 className="m-0">Volontariato</h3>
                </Card.Title>
                <Card.Text className="">
                    <SingleVolontariatoCard />
                    <hr />
                    <SingleVolontariatoCard />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Volontariato
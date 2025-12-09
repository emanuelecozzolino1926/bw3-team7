import SingleVolontariatoCard from './Cards/SingleVolontariatoCard';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Volontariato = () => {
    return (
        <Row>
            <Col
                xs={12}
                md={10}
                xl={8}
                className="bg-white border border-2 rounded-2 p-0 mb-3"
            >
                <Card className="text-center">
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
            </Col>
        </Row>
    )
}

export default Volontariato
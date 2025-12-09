import SingleAttivitaCard from './Cards/SingleAttivitacard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Attivita = () => {
    return (
        <Row>
            <Col
                xs={12}
                md={10}
                xl={8}
                className="bg-white border border-2 rounded-2 p-0 mb-3 flex-grow-1"
            >
                <Card className="text-center ">
                    <Card.Body>
                        <Card.Title className="text-start mb-4">
                            <h3 className="m-0">Attività</h3>
                            <p className="text-secondary m-0 mb-3">600 follower</p>
                        </Card.Title>
                        <Card.Text className="">
                            <SingleAttivitaCard />
                            <SingleAttivitaCard />
                            <SingleAttivitaCard />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="light" className="w-100 text-info bg-light border-0 rounded-0">Mostra tutte le attività</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default Attivita
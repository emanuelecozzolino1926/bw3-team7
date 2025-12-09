import { Container, Row, Col } from 'react-bootstrap'

const SingleAttivitaCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                <Col xs={2} >
                    <div >
                        <img src="https://placedog.net/50/50" alt="doggo"></img>
                    </div>
                </Col>
                <Col xs={10} >
                    <div className="text-start">
                        <p className="m-0 mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint praesentium accusantium omnis </p>
                        <p className="text-secondary m-0">Filippo Timo ha aggiunto una reazione</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleAttivitaCard
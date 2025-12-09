import { Container, Row, Col } from 'react-bootstrap'

const SingleEsperienzaCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                <Col xs={2} md={1} >
                    <div>
                        <img src="https://placedog.net/50/50" alt="doggo"></img>
                    </div>
                </Col>
                <Col xs={10} md={11}>
                    <div className="text-start">
                        <p className="fw-bold m-0">Teacher</p>
                        <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint praesentium accusantium omnis </p>
                        <p className="text-secondary m-0">giu 2019 - Presente - 6 anni e 7 mesi</p>
                        <p className="text-secondary m-0">Roma, Italia</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleEsperienzaCard
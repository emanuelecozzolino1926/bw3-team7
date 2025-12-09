import { Container, Row, Col } from 'react-bootstrap'

const SingleVolontariatoCard = () => {
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
                        <p className="fw-bold m-0">Core Mantainer</p>
                        <p className="text-secondary m-0">HospitalRun</p>
                        <p className="text-secondary m-0">ago 2019 - dec 2019</p>
                        <p className="text-secondary m-0">Scienza e Tecnologia</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleVolontariatoCard
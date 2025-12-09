import { Container, Row, Col } from 'react-bootstrap'

const SingleLicenzeCertCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                <Col xs={2}  >
                    <div>
                        <img src="https://placedog.net/50/50" alt="doggo"></img>
                    </div>
                </Col>
                <Col xs={10} >
                    <div className="text-start">
                        <p className="fw-bold m-0">Cambridge english level 2 Certificate in ESOL international (first) - Grade A level C1 </p>
                        <p className="text-secondary m-0">Cambridege university</p>
                        <p className="text-secondary m-0">Data di rilascio: 01 gennaio</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleLicenzeCertCard
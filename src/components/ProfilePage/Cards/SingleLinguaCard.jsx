import { Container, Row, Col } from 'react-bootstrap'

const SingleLinguaCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                    <div className="text-start">
                        <p className="fw-bold m-0">Italiano</p>
                        <p>Conoscenza madrelingua o biligue</p>
                    </div>

                    <hr />

                    <div className="text-start">
                        <p className="fw-bold m-0">Inglese</p>
                        <p>Conoscenza professionale</p>
                    </div>
            </Row>
        </Container>
    )
}

export default SingleLinguaCard
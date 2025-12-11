import { Container, Row, Col } from 'react-bootstrap'

const SingleAttivitaCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">

                <div className='d-flex'>
                    <div className="text-start">
                        <h5 className="m-0 mb-0">Emanuele non ha ancora pubblicato nulla</h5>
                        <p className="text-secondary m-0">I post recenti che Emanuele condivide appariranno qui</p>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default SingleAttivitaCard
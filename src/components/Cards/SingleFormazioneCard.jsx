import { Container, Row, Col } from 'react-bootstrap'

const SingleFormazioneCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                <div className='d-flex'>
                        <div className="d-inline-block h-100 text-start"> 
                        <img src="https://placedog.net/50/50" alt="doggo" className='d-inline me-2'></img>
                    </div>
                
                    <div className="text-start">
                        <p className="fw-bold m-0">Università degli studi di Pupo</p>
                        <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint praesentium accusantium omnis </p>
                        <p className="text-secondary m-0">2000 - 2004</p>
                        <p className="text-secondary m-0">Votazione: 210 e lode</p>
                    </div>
                    </div>
            </Row>
        </Container>
    )
}

export default SingleFormazioneCard
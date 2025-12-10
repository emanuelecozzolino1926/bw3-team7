import { Container, Row, Col } from 'react-bootstrap'

const SingleLicenzeCertCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
              <div className='d-flex'>
                        <div className="d-inline-block h-100 text-start"> 
                        <img src="https://placedog.net/50/50" alt="doggo" className='d-inline me-2'></img>
                    </div>
              
                    <div className="text-start">
                        <p className="fw-bold m-0">Cambridge english level 2 Certificate in ESOL international (first) - Grade A level C1 </p>
                        <p className="text-secondary m-0">Cambridege university</p>
                        <p className="text-secondary m-0">Data di rilascio: 01 gennaio</p>
                    </div>
               </div>
            </Row>
        </Container>
    )
}

export default SingleLicenzeCertCard
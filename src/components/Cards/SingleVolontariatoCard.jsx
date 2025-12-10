import { Container, Row, Col } from 'react-bootstrap'

const SingleVolontariatoCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                 <div className='d-flex'>
                        <div className="d-inline-block h-100 text-start"> 
                        <img src="https://placedog.net/50/50" alt="doggo" className='d-inline me-2'></img>
                    </div>
               
                    <div className="text-start">
                        <p className="fw-bold m-0">Core Mantainer</p>
                        <p className="m-0">HospitalRun</p>
                        <p className="text-secondary m-0">ago 2019 - dec 2019</p>
                        <p className="text-secondary m-0">Scienza e Tecnologia</p>
                    </div>
                    </div>
            </Row>
        </Container>
    )
}

export default SingleVolontariatoCard
import { Container, Row, Col } from 'react-bootstrap'

const SingleCompentenzeCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                       
                
                    <div className="text-start">
                        <h5>JavaScript</h5>
                        <div className='my-2'>
                        <img src="https://placedog.net/25/25" alt="doggo" className='rounded-4 d-inline me-2'></img>
                        <p className="m-0 mb-0 d-inline">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint praesentium accusantium omnis </p>
                        </div>
                        <div className='my-2'>
                         <img src="https://placedog.net/25/25" alt="doggo" className='rounded-4 d-inline me-2'></img>
                         <p className="m-0 d-inline">Confermato da Filippo Timo</p>
                         </div>
                         <div className='my-2'>
                         <img src="https://placedog.net/25/25" alt="doggo" className='rounded-4 d-inline me-2'></img>
                        <p className="m-0 d-inline"> 20 conferme</p>
                        </div>
                    </div>
                
            </Row>
        </Container>
    )
}

export default SingleCompentenzeCard
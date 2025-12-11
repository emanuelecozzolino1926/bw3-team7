import { Container, Row, Col } from 'react-bootstrap'

const SingleInteressiCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                <Col xs={5} className='text-center flex-grow-1 px-0'>

                    <div className="text-start d-flex mb-2 ms-3">
                        <div className='d-inline-block'>
                            <img src="https://pngimg.com/d/tesla_logo_PNG12.png" alt="doggo" className='d-inline me-2' style={{width:'50px',height:'50px'}}></img>
                        </div>
                        <div className='d-inline-block'>
                            <h5 className='m-0 mb-1'>Tesla</h5>
                            <p className='text-secondary m-0'>12.000.000 Follower</p>
                        </div>
                    </div>
                    <div className='text-start'>
                        <button className="bg-transparent rounded-5 px-2 py-1 ms-5 mt-0"><i className="bi bi-plus"></i> Segui</button>
                    </div>


                </Col>
                <Col xs={5} className='text-center flex-grow-1 px-0'>

                    <div className="text-start d-flex mb-2">
                        <div className='d-inline-block'>
                            <img src="https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg" alt="spx" className='d-inline me-2' style={{width:'50px',height:'50px'}}></img>
                        </div>
                        <div className='d-inline-block'>
                            <h5 className='m-0 mb-1'>Space X</h5>
                            <p className='text-secondary m-0 '>3.500.000 Follower</p>
                        </div>
                    </div>
                    <div className=' text-start'>
                        <button className="bg-transparent rounded-5 px-2 py-1 ms-5 mt-0"><i className="bi bi-plus"></i> Segui</button>
                    </div>


                </Col>
            </Row>
        </Container>
    )
}

export default SingleInteressiCard
import { Container, Row, Col } from 'react-bootstrap'

const SingleCompentenzeCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                       
                
                    <div className="text-start">
                        <h5>JavaScript</h5>
                        <div className='my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16"> 
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        <p className="m-0 mb-0 d-inline">Competenze confermate da Pupo (Enzo Ghinazzi), che ha una grande competenza in questo ambito </p>
                        </div>
                        <div className='my-2'>
                         <img src="https://placedog.net/25/25" alt="doggo" className='rounded-4 d-inline me-2'></img>
                         <p className="m-0 d-inline">Confermato da Mattia Zerbini</p>
                         </div>
                         <div className='my-2'>
                         <img src="https://placecats.com/neo/25/25" alt="doggo" className='rounded-4 d-inline me-2'></img>
                        <p className="m-0 d-inline"> 20 conferme</p>
                        </div>
                    </div>

                    <hr />
                    
                    <div className="text-start">
                        <h5>React.js</h5>
                        <div className='my-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16"> 
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        <p className="m-0 mb-0 d-inline">Competenze confermate da 1 persona negli ultimi 6 mesi</p>
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
import { Container, Row, Col } from 'react-bootstrap'

const SingleLicenzeCertCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
              <div className='d-flex'>
                        <div className="d-inline-block h-100 text-start"> 
                        <img src="https://media.licdn.com/dms/image/v2/C4D0BAQHzAFzG6umH9g/company-logo_200_200/company-logo_200_200/0/1630574057001/cambridge_assessment_logo?e=1767225600&v=beta&t=PPZx0dPP4WMkHyLXDVJ0mYc2P97cxCwmYAmRGSZ_zWw" alt="doggo" className='d-inline me-2' style={{width:"50px"}}></img>
                    </div>
              
                    <div className="text-start">
                        <p className="fw-bold m-0">Cambridge English Level 2 Certificate in ESOL International (First) - Grade A Level C1 </p>
                        <p className="text-secondary m-0">Cambridge University Press & Assessment</p>
                        <p className="text-secondary m-0">Data di rilascio: lug 2014</p>
                    </div>
               </div>
            </Row>
        </Container>
    )
}

export default SingleLicenzeCertCard
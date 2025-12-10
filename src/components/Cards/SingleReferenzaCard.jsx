import { Container, Row, Col } from 'react-bootstrap'

const SingleReferenzaCard = () => {
    return (
        <Container className="mb-3">
            <Row className="d-flex justify-content-center">
                <div className='d-flex px-3'>
                    <div className="d-inline-block h-100 text-start">
                        <img src="https://placedog.net/30/30" alt="doggo" className='d-inline rounded-4 me-2'></img>
                    </div>


                    <div className="d-inline-block h-100 text-start">
                        <h5 className="fw-bold m-0 d-inline">Università degli studi di Pupo</h5>

                        <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint praesentium accusantium omnis </p>
                        <p className="m-0 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint praesentium accusantium omnis </p>

                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique non officia magni fugiat saepe voluptas labore quia quas consequuntur blanditiis quam, doloribus aspernatur, nobis ipsum sed molestias aliquam veritatis. <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta atque saepe odit unde asperiores, dolore ut, ipsa voluptates accusamus molestiae aliquid ea fugiat! Laudantium reprehenderit mollitia officia! Eum, nisi sunt! <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor rem amet, magni veniam libero vel sit? Praesentium ab rem, doloremque quis odio deleniti reiciendis architecto modi molestias porro sint. Quisquam.</p>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default SingleReferenzaCard
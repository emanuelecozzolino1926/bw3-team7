import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

function Post1() {
  return (
    <Card className='mt-2'>
      <Card.Body><img src='https://www.nosilence.it/wp-content/uploads/2019/02/Pupo.jpg' alt='foto Pupo' className="rounded-circle" style={{ width: '55px', height: '55px' }} />
    <p>Enzo Ghinazzi</p>
    <p>3g</p>
      </Card.Body>
    <p>Il Tour è stato fantastico, #VivaPupone</p>
    <img src="https://lavoce.hr/wp-content/uploads/2023/12/PUPO_30.jpg" alt="foto concerto" />
   
    <Card.Footer>
        <Row xs={3} md={4} className='text-center mt-2'>
       <Col><i className="bi bi-hand-thumbs-up"></i></Col>
       <Col> <i className="bi bi-chat-left-dots"></i></Col>
       <Col className='d-none d-sm-block d-sm-none d-md-block'><i className="bi bi-shuffle "></i></Col>
       <Col> <i className="bi bi-send-fill"></i></Col>
        </Row>
    </Card.Footer>
    </Card>
  );
}

export default Post1;
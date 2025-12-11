import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import LeftCards from './HomeCards/LeftCard';
import CreatePost from './HomeCards/CreatePost';


const Home = function(){
      return(<><Container>
    <Row className='ms-2 primaHome mt-xs-5  mt-sm-5  mt-md-5  mt-lg-5  mt-xl-5'>
        <Col className='col-md-4 col-lg-3 ms-2 '><LeftCards/>
    </Col><Col className='col-lg-5 col-md-8'>
    <CreatePost />
    </Col>
    <Col className='d-none d-lg-flex col-lg-4 '></Col>
    </Row></Container>
</>)
};
export default Home
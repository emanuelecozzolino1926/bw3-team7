import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import LeftCards from "./HomePage/HomeCards/LeftCard";
import CreatePost from "./HomePage/HomeCards/CreatePost";
import ColonnaDestra from "./ColonnaDestra";
import FooterHome from "./HomePage/FooterHome";
import Consigliati from "./HomePage/Consigliati";
import Post1 from "./HomePage/HomeCards/Post1";
import { useState } from "react";
import PostList from "./HomePage/PostList";

const Home = function () {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <Container>
        <Row className="ms-2 primaHome ">
          <Col className="col-md-4 col-lg-3 ms-lg-2 ">
            <LeftCards />
          </Col>
          <Col className="col-lg-5 col-md-7">
            <CreatePost setPosts={setPosts} />
            <Post1 posts={posts} />
            <PostList />
            <Consigliati people={3} title="Consigli per te" />
          </Col>
          <Col className="d-none d-lg-block col-lg-3 ">
            <ColonnaDestra title="Rompicapo di oggi" people={1} />
            <ColonnaDestra title="Aggiungi feed" people={3} />
            <FooterHome />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;

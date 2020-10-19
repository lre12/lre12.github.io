import React from "react";
import "../css/Home.scss";
import { Container, Row, Col } from "reactstrap";

function Home(): JSX.Element {
  return (
    <div id="home">
      <Container className="home-container">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div className="title">
              <div className="font-bold">
                Hello, I’m
                <span className="font-color-pink"> LRE12</span>.
              </div>
              <div className="font-bold">I'm a Junior Web Developer</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

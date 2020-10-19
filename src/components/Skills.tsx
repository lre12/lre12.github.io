import React from "react";
import "../App.scss";
import "../css/Skills.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faPython,
  faJava,
  faNode
} from "@fortawesome/free-brands-svg-icons";

function Skills(): JSX.Element {
  return (
    <div id="skills" className="background-color-gray padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">SKILLS</p>
      </div>
      <Container>
        <Row>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faHtml5} className="icon-size" />
            <p className="font-bold font-color-gray">HTML5</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faCss3} className="icon-size" />
            <p className="font-bold font-color-gray">CSS3</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faBootstrap} className="icon-size" />
            <p className="font-bold font-color-gray">Bootstrap</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faJs} className="icon-size" />
            <p className="font-bold font-color-gray">JavaScript</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faReact} className="icon-size" />
            <p className="font-bold font-color-gray">React</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faPython} className="icon-size" />
            <p className="font-bold font-color-gray">Python/Django</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <svg
              version="1"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-width-height"
              viewBox="0 0 256.000000 256.000000"
            >
              <path d="M0 128v128h256V0H0v128zm157-4.5V135h-33v105H97V135H64v-23h93v11.5zm65-10.1c4.1.8 8.7 1.9 10.3 2.5l2.7 1.1v12.5c0 6.9-.2 12.5-.4 12.5s-2.3-1.1-4.7-2.4c-9-5.1-23.4-7-32.2-4.4-2.1.6-5.2 2.5-6.8 4.1-2.4 2.3-2.9 3.7-2.9 7.4 0 4 .5 5.1 3.8 8.2 2.1 2 9.9 6.6 17.5 10.4 16 7.9 24.1 14.6 27.8 22.9 3.3 7.4 3.4 23 .2 30-3 6.6-9.6 13.3-16.1 16.4-13.8 6.5-36.3 7.1-53.9 1.3l-6.3-2.1V206l5 3.6c6.5 4.7 14.9 7.6 23.7 8.2 8.8.6 15.3-1 19.3-4.8 2.5-2.3 3-3.6 3-7.4 0-7.3-4.2-11.1-21.4-19.5-15.2-7.5-20-10.9-24.5-17.5-10-14.5-7-36.7 6.4-46.8 11.4-8.7 30.3-11.9 49.5-8.4z" />
            </svg>
            <p className="font-bold font-color-gray padding-top-03e">TypeScript</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faNode} className="icon-size" />
            <p className="font-bold font-color-gray">Node.js/Express</p>
          </Col>
          <Col xs={4} sm={3} md={2} className="padding-top-btm-05e">
            <FontAwesomeIcon icon={faJava} className="icon-size" />
            <p className="font-bold font-color-gray">Java/Spring</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;

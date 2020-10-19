import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer(): JSX.Element {
  return (
    <div id="footer" className="padding-top-btm-1e">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div>
              <span className="font-color-gray font-07">
                WOOJIN SOHN{" "}
                <span className="font-color-pink font-bold">@2020</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

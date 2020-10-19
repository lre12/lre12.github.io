import React from "react";
import "../App.scss";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faCheck, faUser, faUsers, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const carousel_blogpage = [
  {
    src: "./img/blogpage.png"
  },
  {
    src: "./img/blogpage2.png"
  },
  {
    src: "./img/blogpage3.png"
  },
  {
    src: "./img/blogpage4.png"
  }
];

const carousel_portfolio = [
  {
    src: "./img/portfolio.png"
  },
  {
    src: "./img/portfolio2.png"
  },
  {
    src: "./img/portfolio3.png"
  },
  {
    src: "./img/portfolio4.png"
  }
];

function Projects(): JSX.Element {
  return (
    <div id="projects" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">PROJECTS</p>
      </div>
      <Container>
        <Row>
          {/* 프로젝트 1번 포트폴리오 */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">CLEVER MEMO</p>
              <p className="font-color-lightgray font-bold">
                SVN 기반 머신러닝으로 사용자 메모를 분류하는 <br/>안드로이드 어플리케이션입니다.
              </p>
              <div className="padding-top-btm-1e">
              <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">3명</span>
                  <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">30</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2019.12 - 2020.02 (3개월)</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">Android</span> 
                  <span className="keyword-yellow margin-left-right-03e">SVN</span> 
                  <span className="keyword-yellow margin-left-right-03e">NLP</span> 
                </p>
              </div>
              <div>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-gray margin-left-1e margin-right-03e">APP FRONT-END</span> 
                  <span className="keyword-gray margin-left-right-03e">NLP</span>
                  <span className="keyword-gray margin-left-right-03e">기획</span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="https://github.com/lre12/clever_memo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            {/* <UncontrolledCarousel items={carousel_portfolio} /> */}
          </Col>
        </Row>
        
        <div className="bottom-line"></div>

        {/* 프로젝트 2번 블로그페이지 */}
        <Row>
          {/* <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_blogpage} />
          </Col> */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">MediHelper</p>
              <p className="font-color-lightgray font-bold">
              Naïve Bayes 분류 기반 머신러닝으로 <br/>사용자에게 병명을 추천해주는 웹 사이트입니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">3명</span>
                  <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">30</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2019.06 - 2018.08 (3개월)</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">Django</span> 
                  <span className="keyword-yellow margin-left-right-03e">NLP</span> 
                  <span className="keyword-yellow margin-left-right-03e">Bootstrap</span> 
                </p>
              </div>
              <div>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-gray margin-left-1e margin-right-03e">기획</span> 
                  <span className="keyword-gray margin-left-right-03e">Django WEB</span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="https://github.com/lre12/medihelper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="bottom-line"></div>
        <Row>
          {/* <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_blogpage} />
          </Col> */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">KIT-PAY</p>
              <p className="font-color-lightgray font-bold">
              HyperLedger 기반 Private 블록체인으로 <br/> 교내 상품권 거래를 전산화하는 플랫폼입니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">4명</span>
                  <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">60</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2020.08 - 현재 진행중</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">React</span> 
                  <span className="keyword-yellow margin-left-right-03e">BlockChain</span> 
                  <span className="keyword-yellow margin-left-right-03e">Express</span> 
                </p>
              </div>
              <div>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-gray margin-left-1e margin-right-03e">React Front</span> 
                  <span className="keyword-gray margin-left-right-03e">Express BackEnd</span>
                  <span className="keyword-gray margin-left-right-03e">설계</span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="https://github.com/lre12/Kumoh-pay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Projects;

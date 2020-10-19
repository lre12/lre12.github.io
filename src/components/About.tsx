  import React from "react";
import "../App.scss";
import "../css/About.scss";
import { Container, Row, Col } from "reactstrap";
import profileImg from '../img/profile.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleCarry,
  faRunning,
  faChild,
  faCode, 
  faCalendarAlt,
  faUniversity,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import { faBlogger, faGithub } from "@fortawesome/free-brands-svg-icons";

function About(): JSX.Element {
  return (
    <div id="about" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">ABOUT</p>
      </div>
      <Container>
        {/* profile */}
        <Row>
          <Col xs={12} sm={6} md={6}>
            <div className="padding-top-2e">
              <p className="font-bold-900 font-1H font-color-bl padding-top-2e">
                PROFILE
              </p>
            </div>
            <img src={profileImg} alt="프로필 사진" id="profile-img" />
            <div>
              <p className="font-bold-700 font-1H font-color-lightgray">
                <span className="padding-left-right-05e">손우진</span>
              </p>
            </div>
            <div className="padding-top-btm-1e">
              <span className="padding-left-right-1e">
                <a
                  href="https://github.com/lre12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icon-size-2He icon-color"
                  />
                </a>
              </span>
            </div>
          </Col>
          {/* education, career */}
          <Col xs={12} sm={6} md={6}>
            <div className="padding-top-btm-2e">
              <div>
                <p className="font-bold-900 font-1H font-color-bl">EDUCATION</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faUniversity}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">금오공대 컴퓨터소프트웨어공학과</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2019.03 - 재학중</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold-900 font-1H font-color-bl">CAREER</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">커리어를 시작할 곳을 찾습니다!</span>
                </p>
                {/* <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2017.11 - 2018.02 (4개월)</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">HTML5</span> 
                  <span className="keyword-yellow margin-left-right-03e">CSS3</span> 
                  <span className="keyword-yellow margin-left-right-03e">Bootstrap</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <span className="keyword-yellow">JavaScript(jQuery)</span> 
                  <span className="keyword-yellow margin-left-right-03e">Node.js</span> 
                  <span className="keyword-yellow margin-left-right-03e">MYSQL</span>
                </p> */}
              </div>
              <div className="bottom-line-small"></div>
              {/* <div>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">금융 IT회사 - 개발자</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2016.08 - 2017.03 (8개월)</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">ORACLE</span> 
                  <span className="keyword-yellow margin-left-right-03e">SPRING</span> 
                </p>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

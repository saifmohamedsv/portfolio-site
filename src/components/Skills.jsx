import React from "react";
import Colors from "../assets/style";
import styled from "styled-components";
// antd
import { Row, Col, Button, Popover } from "antd";

import "./projects.scss";
// icons

import ReactJs from "../assets/icons/atom-symbol.png";
import Backend from "../assets/icons/database.png";
import UI from "../assets/icons/user-experience.png";
// colors
const { darkgrey, violet, lightgrey } = Colors;

// Styled Comps
const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 10vw 32px 10vw;
  background-color: ${(props) => (props.light ? "#fff" : darkgrey)};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 32px;
    gap: 32px;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 128px;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 48px;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 520px;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;
const ServiceTitle = styled.h1`
  font-size: 32px;
  font-family: "NetflixMedium";
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const ServiceSubTitle = styled.h1`
  font-size: 20px;
  color: #fff;
  font-family: "NetflixRegular";
`;

const SkillColumn = styled.div`
  min-width: 200px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  /* gap: 12px; */
  align-items: flex-start;
`;
const SKillTitle = styled.span`
  font-size: 24px;
  font-family: "NetflixBold";
  color: #fff;
  margin: 12px 0 8px 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const SKillSubTitle = styled.span`
  font-size: 16px;
  font-family: "NetflixRegular";
  color: #92929d;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const SkillImage = styled.img`
  width: 32px;
  height: 32px;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
function Skills() {
  return (
    <Container id="Skills">
      <ContentContainer>
        <DescriptionContainer>
          <ServiceTitle>Skills</ServiceTitle>
          <ServiceSubTitle>
            This section will show you some of my skills as a web developer
            don't hesitate to get in touch with me if you've any website idea
            I'm open to work as a freelancer
          </ServiceSubTitle>
        </DescriptionContainer>
        <Row
          gutter={[48, 48]}
          align="start"
          justify="space-between"
          style={{ width: "100%" }}
        >
          <Col lg={8} md={12} xs={24} align="start">
            <SkillColumn>
              <SkillImage src={ReactJs} />
              <SKillTitle>Front-End</SKillTitle>
              <SKillSubTitle>
                Experience in HTML5, CSS3, JS, Reactjs & Nextjs
              </SKillSubTitle>
            </SkillColumn>
          </Col>
          <Col lg={8} md={12} xs={24} align="start">
            <SkillColumn>
              <SkillImage src={Backend} />
              <SKillTitle>Back-End</SKillTitle>
              <SKillSubTitle>
                Experience in Nodejs, ExpressJs, Rest APIs, Firebase & Mongodb
              </SKillSubTitle>
            </SkillColumn>
          </Col>
          <Col lg={8} md={12} xs={24} align="start">
            <SkillColumn>
              <SkillImage src={UI} />
              <SKillTitle>UI / UX</SKillTitle>
              <SKillSubTitle>
                Little experience using figma & AdobeXD ( BASICS )
              </SKillSubTitle>
            </SkillColumn>
          </Col>
        </Row>
      </ContentContainer>
    </Container>
  );
}

export default Skills;

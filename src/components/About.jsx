import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { LinkedinFilled, InstagramOutlined } from "@ant-design/icons";
import Colors from "../assets/style";
import Image from "../assets/images/x.jpg.png";
import { ButtonStyle } from "./Hero";
const { darkgrey, violet, lightgrey } = Colors;

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  padding: 32px 15vw;
  background-color: ${(props) => (props.light ? "#fff" : lightgrey)};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 160px;
  /* justify-content: space-between; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 32px;
    gap: 32px;
  }
`;
const AboutImage = styled.img`
  max-width: 380px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const AboutInformation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
const AboutTitle = styled.h1`
  font-size: 32px;
  color: #fff;
  text-transform: capitalize;
  font-family: "NetflixRegular";
`;
const AboutDesc = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "NetflixRegular";
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
function About() {
  return (
    <Container id="About">
      <AboutImage src={Image} />
      <AboutInformation>
        <AboutTitle>About me</AboutTitle>
        <AboutDesc>
          My name is Saif, I'm 20 years old, I live in Egypt. I am Currently
          studying at an university. I've also been studying a lot on my own to
          learn new technologies and skills. <br /> <br />I started as a Front
          End Developer at 2018. Since then I have been dedicating about 12hrs a
          day to studies. I see that I am on the right path because I see the
          result that the dedicated hours bring.
        </AboutDesc>
        <ButtonGroup>
          <a href="https://www.instagram.com/sm4web" target="_blank">
            <Button icon={<InstagramOutlined />} style={ButtonStyle}>
              Instagram
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/saif-mohamed-142628175/"
            target="_blank"
          >
            <Button icon={<LinkedinFilled />} style={ButtonStyle}>
              LinkedIn
            </Button>
          </a>
        </ButtonGroup>
      </AboutInformation>
    </Container>
  );
}

export default About;

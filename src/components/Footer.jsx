import React from "react";
import Colors from "../assets/style";
import styled from "styled-components";
import { Row, Col } from "antd";

const { darkgrey, violet, lightgrey } = Colors;

const Footer = () => {
  return (
    <Container>
      <Row
        gutter={[32, 32]}
        align="start"
        justify="space-between"
        style={{ width: "100%" }}
      >
        <Col lg={6} md={8} xs={12}>
          <LogoCol>
            <LogoText>SM4Web</LogoText>
            <SlugText>
              The Most Experienced <br /> developers in the world
            </SlugText>
            <BoldSlug>Be Bold</BoldSlug>
          </LogoCol>
        </Col>
        <Col lg={6} md={8} xs={12} align="center">
          <LogoCol>
            <FooterTitle>Explore</FooterTitle>
            <FooterLink href="#Home">Home</FooterLink>
            <FooterLink href="#About">About</FooterLink>
            <FooterLink href="#Projects">Projects</FooterLink>
            <FooterLink href="#Services">Services</FooterLink>
            <FooterLink href="#Skills">Skills</FooterLink>
          </LogoCol>
        </Col>{" "}
        <Col lg={6} md={8} xs={12}>
          <LogoCol>
            <FooterTitle>Business</FooterTitle>
            <FooterSubTitle>sm4webd@gmail.com</FooterSubTitle>
            <FooterSubTitle>+20 155 4304 409</FooterSubTitle>
          </LogoCol>
        </Col>
        <Col lg={6} md={8} xs={12}>
          <LogoCol>
            <FooterTitle>Follow</FooterTitle>
            <FooterLink
              href="https://www.instagram.com/sm4web/"
              target="_blank"
            >
              Instagram
            </FooterLink>
            <FooterLink
              href="https://www.facebook.com/saifmohamedsv"
              target="_blank"
            >
              Facebook
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/saif-mohamed-142628175/"
              target="_blank"
            >
              Linkedin
            </FooterLink>
          </LogoCol>
        </Col>
      </Row>
      <RightsReserved>© 2021 SM4WEB. All rights reserved</RightsReserved>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 100%;
  position: relative;
  padding: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  background-color: ${violet};
  @media (max-width: 768px) {
    padding: 24px;
  }
`;
const LogoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  text-align: start;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const LogoText = styled.span`
  color: #fff;
  font-size: 24px;
  font-family: "Neometric";
`;
const SlugText = styled.span`
  font-size: 16px;
  color: #ffffff99;
  line-height: 200%;
  font-family: "NetflixRegular";
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const BoldSlug = styled.span`
  font-size: 16px;
  color: #fff;
  font-family: "NetflixBold";
  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;
const FooterTitle = styled.span`
  user-select: none;
  font-size: 22px;
  color: #fff;
  font-family: "NetflixMedium";
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const FooterLink = styled.a`
  font-size: 14px;
  color: #ffffff99;
  font-family: "NetflixRegular";
  letter-spacing: 0.5px;
  &:hover {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const FooterSubTitle = styled.span`
  font-size: 14px;
  color: #ffffff99;
  font-family: "NetflixRegular";
  letter-spacing: 0.5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const RightsReserved = styled.div`
  font-size: 16px;
  color: #fff;
  font-family: "Neometric";
  @media (max-width: 768px) {
    font-size: 12px;
    bottom: 24px;
    left: 24px;
  }
`;

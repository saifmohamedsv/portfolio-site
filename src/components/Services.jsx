import React from "react";
import styled from "styled-components";
import Colors from "../assets/style";
import Laptop from "../assets/icons/laptop.png";
import Megaphone from "../assets/icons/megaphone.png";
import Smartphone from "../assets/icons/smartphone.png";


import { Row, Col, Button } from "antd";
const { darkgrey, violet, lightgrey } = Colors;

const ServicesArr = [
  {
    width: "62px",
    height: "62px",
    img: Laptop,
    title: "Website Creation",
    desc: "Development of professional websites, web systems, blogs and online stores.",
  },
  {
    img: Smartphone,
    title: "Responsive Sites",
    desc: "Creation of responsive websites for the best viewing at all resolutions.",
  },
  {
    img: Megaphone,
    title: "Semantic Code",
    desc: "Strategy and monitoring for your business, making your website appear better in searches",
  },
];

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 15vw 32px 15vw;
  background-color: ${(props) => (props.light ? "#fff" : lightgrey)};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 32px;
    gap: 32px;
  }
`;
const Title = styled.h1`
  text-align: center;
  margin: 6rem 0 4rem 0;
  color: #fff;
  font-size: 32px;
  font-family: "DexaPro";
  text-transform: capitalize;
  letter-spacing: 0.6px;
`;
const Card = styled.div`
  width: 100%;
  padding: 32px 24px;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${darkgrey};
  color: #fff;
  border-radius: 8px;
  transition: all ease-in 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
`;
const ServiceImage = styled.img`
  margin-bottom: 24px;
  height: 48px;
`;
const ServiceTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-family: "NetflixRegular";
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const ServiceSubTitle = styled.h1`
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-family: "NetflixMedium";
`;
function Services() {
  return (
    <Container id="Services">
      <Title>Services</Title>
      <Row gutter={[32, 32]} align="center" justify="space-between">
        {ServicesArr.map((res) => (
          <Col lg={8} md={12} sm={12} xs={24}>
            <Card>
              <ServiceImage
                src={res.img}
                style={{ width: `${res.width}`, height: `${res.height}` }}
              />
              <ServiceTitle>{res.title}</ServiceTitle>
              <ServiceSubTitle>{res.desc}</ServiceSubTitle>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;

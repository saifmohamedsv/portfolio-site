import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Colors from "../assets/style";
import HeroImage from "../assets/images/heroImage.png";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { darkgrey, violet, lightgrey } = Colors;

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh);
  padding: 32px 15vw;
  background-color: ${(props) => (props.light ? "#fff" : darkgrey)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    gap: 32px;
  }
`;
const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
`;
const Hello = styled.span`
  font-size: 24px;
  font-family: "Macklin";
  letter-spacing: 0.5px;
  transition: all ease-in-out 0.4s;
  color: ${(props) => (props.light ? darkgrey : "#fff")};
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const Name = styled.span`
  font-size: 48px;
  font-family: "Neometric";
  letter-spacing: 1px;
  color: ${(props) => (props.light ? darkgrey : "#fff")};
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const Job = styled.span`
  font-size: 24px;
  font-family: "DexaPro";
  color: ${(props) => (props.light ? darkgrey : "#fff")};
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const HeroBackg = styled.img`
  user-select: none;
  position: absolute;
  top: 0;
  z-index: 0;
  right: 0;
  height: 100vh;
  @media screen and (max-width: 768px) {
    right: -80vw;
    display: none;
  }
`;

export const ButtonStyle = {
  backgroundColor: `${violet}`,
  color: "#fff",
  border: "none",
  marginTop: "24px",
  fontSize: "24px",
  width: "200px",
  borderRadius: "4px",
  height: "50px",
};
function Hero({ ActiveTheme }) {
  const props = {
    light: ActiveTheme,
  };
  return (
    <Container {...props} id="Home">
      <HeroContent {...props}>
        <Hello {...props}>Hello, I'm</Hello>
        <Name {...props}>saif mohamed</Name>
        <Job {...props}>front-end developer</Job>
        <a href="/CV.pdf" download>
          <Button icon={<DownloadOutlined />} style={ButtonStyle}>
            Resume
          </Button>
        </a>
      </HeroContent>
      <HeroBackg src={HeroImage} />
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    ActiveTheme: state.changeThemeReducer,
  };
};
export default connect(mapStateToProps)(Hero);

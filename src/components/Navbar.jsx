import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../assets/style";
import { LoginOutlined } from "@ant-design/icons";
import { MdDarkMode } from "react-icons/md";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { connect } from "react-redux";
import { changeTheme } from "../redux/actions";
const { lightgrey, violet } = Colors;
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 999;
  padding: 24px 15vw;
  background-color: ${(props) => (props.light ? "#fff" : lightgrey)};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;
const Logo = styled.span`
  cursor: pointer;
  font-size: 32px;
  color: ${(props) => (props.light ? lightgrey : "#fff")};
  font-family: "Neometric";
  /* letter-spacing: 2.7px; */
  text-transform: uppercase;
  transition: all ease-in-out 0.5s;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;
  a {
    color: ${(props) => (props.light ? lightgrey : "#fff")};
    font-family: ${(props) =>
      props.light ? "NetflixRegular" : "NetflixLight"};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MobileNav = styled.nav`
  position: absolute;
  top: 85px;
  z-index: 999;
  border-radius: 0 0 0 18px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.light ? "#fff" : lightgrey)};
  a {
    color: ${(props) => (props.light ? lightgrey : "#fff")};
    font-family: ${(props) =>
      props.light ? "NetflixRegular" : "NetflixLight"};
  }
  @media screen and (max-width: 768px) {
    padding: 24px;
    gap: 24px;
  }
`;
const NavItem = styled.a`
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  user-select: none;
  text-transform: capitalize;
  transition: all ease-in-out 0.5s;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  &:hover {
    color: ${violet};
    transform: rotate(360deg);
  }
`;

function Navbar({ changeTheme, ActiveTheme }) {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const [mobActive, setMobActive] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <Container light={ActiveTheme}>
      <Logo light={ActiveTheme}>sm4web</Logo>
      <NavMenu light={ActiveTheme}>
        <NavItem href="#About">About</NavItem>
        <NavItem href="#Projects">Projects</NavItem>
        <NavItem href="#Services">Services</NavItem>
        <NavItem href="#Skills">Skills</NavItem>
        <NavItem href="/login">
          <LoginOutlined />
          Login
        </NavItem>
        <MdDarkMode
          style={
            ActiveTheme
              ? { color: lightgrey, fontSize: "32px", userSelect: "none" }
              : { color: "#fff", fontSize: "32px", userSelect: "none" }
          }
          onClick={() => {
            changeTheme("change");
          }}
        />
      </NavMenu>
      {mobActive && !activeMenu && (
        <MobileNav light={ActiveTheme}>
          <NavItem href="#About">About</NavItem>
          <NavItem href="#Projects">Projects</NavItem>
          <NavItem href="#Services">Services</NavItem>
          <NavItem href="#Skills">Skills</NavItem>
          <NavItem href="/login">
            <LoginOutlined />
            Login
          </NavItem>
          <MdDarkMode
            style={
              ActiveTheme
                ? { color: lightgrey, fontSize: "32px", userSelect: "none" }
                : { color: "#fff", fontSize: "32px", userSelect: "none" }
            }
            onClick={() => {
              changeTheme("change");
            }}
          />
        </MobileNav>
      )}
      {!activeMenu && !mobActive && (
        <BiMenu
          style={
            ActiveTheme
              ? { color: lightgrey, fontSize: "36px" }
              : { color: "#fff", fontSize: "36px" }
          }
          onClick={() => {
            setMobActive(!mobActive);
          }}
        />
      )}
      {!activeMenu && mobActive && (
        <BiMenuAltRight
          style={
            ActiveTheme
              ? { color: lightgrey, fontSize: "36px" }
              : { color: "#fff", fontSize: "36px" }
          }
          onClick={() => {
            setMobActive(!mobActive);
          }}
        />
      )}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    ActiveTheme: state.changeThemeReducer,
  };
};
export default connect(mapStateToProps, { changeTheme })(Navbar);

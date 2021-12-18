import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Colors from "../assets/style";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import Spinner from "./Spinner";
const { darkgrey, violet, lightgrey } = Colors;

const BASE_URL = "https://postgetapi.herokuapp.com/saifprojects";
const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  padding: 32px 15vw;
  background-color: ${(props) => (props.light ? "#fff" : darkgrey)};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 32px;
    gap: 32px;
  }
`;
const Title = styled.h1`
  color: #fff;
  margin: 6rem 0 4rem 0;
  font-size: 32px;
  font-family: "DexaPro";
  text-transform: capitalize;
  letter-spacing: 0.6px;
`;
const Card = styled.div`
  width: 100%;
  padding: 24px 32px;
  min-height: 280px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${lightgrey};
  color: #fff;
  border-radius: 8px;
  transition: all ease-in 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
`;
const ProjectTitle = styled.h1`
  color: #fff;
  font-size: 32px;
  font-family: "NetflixThin";
  text-transform: capitalize;
  letter-spacing: 0.6px;
`;
const ProjectDesc = styled.p`
  color: #fff;
  font-size: 12px;
  font-family: "NetflixMedium";
  letter-spacing: 0.6px;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 12px;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`;
export const ButtonStyle = {
  backgroundColor: `${violet}`,
  color: "#fff",
  border: "none",
  fontSize: "12px",
  fontFamily: "NetflixMedium",
  maxWidth: "140px",
  borderRadius: "4px",
  height: "40px",
};
function Projects() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(async () => {
    setLoading(true);
    const data = await axios
      .get(BASE_URL)
      .then((res) => {
        if (res?.data) {
          setLoading(false);
          setProjects(res?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Container id="Projects">
      <Title style={{ textAlign: "center" }}>projects</Title>
      {loading && <Spinner color="transparent" text="Fetching Projects..." />}
      {!loading && (
        <Row gutter={[32, 32]} align="start" justify="start">
          {projects.map((res) => (
            <Col lg={8} md={12} sm={12} xs={24}>
              <Card className="card">
                <ProjectTitle>{res.name}</ProjectTitle>
                <ProjectDesc>{res.desc}</ProjectDesc>
                <ButtonGroup>
                  <a href={res?.github} target="_blank">
                    <Button icon={<GithubOutlined />} style={ButtonStyle}>
                      Github
                    </Button>
                  </a>
                  <a href={res?.link} target="_blank">
                    <Button icon={<LinkOutlined />} style={ButtonStyle}>
                      Live Demo
                    </Button>
                  </a>
                </ButtonGroup>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <a
        href="https://github.com/saifmohamedo?tab=repositories"
        target="_blank"
      >
        <ProjectTitle
          style={{
            textAlign: "center",
            margin: "2rem 0",
            color: `${violet}`,
          }}
        >
          All Repos
        </ProjectTitle>
      </a>
    </Container>
  );
}

export default Projects;

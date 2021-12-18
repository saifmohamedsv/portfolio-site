import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router";
import Spinner from "./Spinner";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 12px 0px;
  }
`;
const Card = styled.div`
  cursor: pointer;
  position: relative;
  max-width: 100%;
  display: flex;
  background-color: #121214;
  flex-direction: row;
  align-items: flex-start;
  box-shadow: 3px 0px 14px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  margin: 3rem 0;
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 24px;
    flex-direction: column;
    align-items: center;
  }
`;
const CardImage = styled.img`
  border-radius: 18px;
  width: 25%;
  @media screen and (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;
const CardDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  flex-direction: 18px;
  padding: 24px;
  @media screen and (max-width: 768px) {
    padding: 8px;
    gap: 12px;
  }
`;
const CardTitle = styled.h1`
  font-size: 2.4vw;
  letter-spacing: 0.8px;
  color: #fff;
  font-family: "NetflixBold";
  @media screen and (max-width: 768px) {
    margin: 0 !important;
    font-size: 18px;
  }
`;
const CardId = styled.h1`
  font-size: 1vw;
  letter-spacing: 0.4px;
  color: #686868;
  font-family: "NetflixRegular";
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const CardDesc = styled.h1`
  font-size: 1vw;
  letter-spacing: 0.8px;
  text-transform: lowercase;
  color: #686868;
  font-family: "NetflixRegular";
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0.1px;
    font-weight: normal;
  }
`;
const CardLink = styled.a`
  font-size: 1vw;
  letter-spacing: 0.8px;
  color: #005ecb;
  font-family: "NetflixRegular";
  font-weight: bold;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  &:hover {
    color: #202024;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 0;
    font-weight: normal;
    display: none;
  }
`;
function Overview(props) {
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "https://postgetapi.herokuapp.com/saifprojects";
  const history = useHistory();

  const GetProjectById = async (id) => {
    const data = await axios
      .get(`${BASE_URL}/${id}`)
      .then((res) => {
        history.push(`/admin/project/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteProject = async (id) => {
    const data = await axios
      .delete(`${BASE_URL}/${id}`)
      .then((res) => {
        console.log(res);
        history.go("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(async () => {
    const data = await axios
      .get(BASE_URL)
      .then((res) => {
        console.log(res);
        setProjects(res?.data);
        if (res.status === 200) {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <CardId>Total Porjects: {Projects.length}</CardId>
      <a href="/admin/add">
        <Button
          variant="outlined"
          type="submit"
          style={{
            background: "#121214",
            border: "1px solid #121214",
            color: "#fff",
            height: "50px",
          }}
        >
          Add Project
        </Button>
      </a>
      {loading ? (
        <Spinner text="Welcome SAIF..." color="#fff" />
      ) : (
        Projects.map((res) => (
          <Card
            key={res._id}
            onClick={() => {
              GetProjectById(res._id);
            }}
          >
            <CardDetails>
              <CardId>ID: {res._id}</CardId>
              <CardTitle>{res.name}</CardTitle>
              <CardDesc>{res.desc}</CardDesc>
              <CardLink href={res.link} target="_blank">
                link: {res.link}
              </CardLink>
            </CardDetails>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Overview;

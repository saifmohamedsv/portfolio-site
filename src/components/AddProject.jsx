import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import axios from "axios";
import * as Yup from "yup";
import { ButtonGroup, Toolbar } from "@mui/material";
import { Formik, Form } from "formik";
import { useHistory } from "react-router";
import Spinner from "./Spinner";
function AddProject() {
  const [loading, setLoading] = useState(false);
  const BASEURL = "https://postgetApi.herokuapp.com/saifprojects";
  const history = useHistory();
  const fetchData = async (values) => {
    const data = await axios
      .post(BASEURL, values, {
        method: "POST",
        mode: "no-cors",
      })
      .then((res) => {
        if (res?.data) {
          history.push("/admin/overview");
          console.log(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    desc: Yup.string().required("Required"),
    link: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={{ name: "", link: "", desc: "", github: "" }}
      validationSchema={LoginSchema}
    >
      {({ handleChange, values, errors, touched, handleBlur }) => (
        <>
          {loading ? (
            <Spinner text="Uploading to the database..." />
          ) : (
            <Form
              onSubmit={async (e) => {
                setLoading(true);
                e.preventDefault();
                setTimeout(() => {
                  fetchData(values);
                }, 1000);
              }}
            >
              <Container
                maxWidth="sm"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "48px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Project Name*"
                  variant="filled"
                  color="success"
                  style={{ backgroundColor: "#fff" }}
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.name}
                  error={errors.name}
                  fullWidth
                />

                <TextField
                  id="outlined-basic"
                  label="Project Description*"
                  variant="filled"
                  name="desc"
                  color="secondary"
                  style={{ backgroundColor: "#fff" }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.desc}
                  fullWidth
                  defaultValue={values.desc}
                />
                <TextField
                  id="outlined-basic"
                  label="Live Demo*"
                  style={{ backgroundColor: "#fff" }}
                  variant="filled"
                  color="secondary"
                  name="link"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.link}
                  fullWidth
                  defaultValue={values.link}
                />
                <TextField
                  id="outlined-basic"
                  label="Github Link*"
                  variant="filled"
                  style={{ backgroundColor: "#fff" }}
                  color="secondary"
                  name="link"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  defaultValue={values.github}
                />

                <ButtonGroup fullWidth>
                  <Button
                    variant="outlined"
                    type="submit"
                    style={
                      errors.name || errors.desc || errors.link
                        ? {
                            color: "#fff",
                            background: "#68686864",
                            height: "50px",
                          }
                        : {
                            color: "#fc46aa",
                            border: "1px solid #fc46aa",
                            height: "50px",
                          }
                    }
                    disabled={
                      errors.name || errors.desc || errors.link ? true : false
                    }
                  >
                    Continue
                  </Button>
                </ButtonGroup>
              </Container>
            </Form>
          )}
        </>
      )}
    </Formik>
  );
}

export default AddProject;

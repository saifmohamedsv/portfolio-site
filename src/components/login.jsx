import React from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import * as Yup from "yup";
function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}
const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
function Login() {
  const history = useHistory();
  const CheckLogin = (email, password) => {
    if (email === "saifmohamedsv" && password === "123") {
      history.push("/admin/overview");
      console.log("done");
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
    >
      {({ handleChange, values, errors, touched, handleBlur }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            CheckLogin(values.email, values.password);
          }}
        >
          <AppBar position="relative">
            <Toolbar style={{ background: "#202024" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Login
              </Typography>
              <Button color="inherit" href="/">
                HOME
              </Button>
            </Toolbar>
          </AppBar>
          <Container
            maxWidth="xs"
            style={{
              minHeight: "90vh",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <Typography variant="h4" color="#202024">
              Welcome SAIF!
            </Typography>
            <br />
            <TextField
              id="outlined-basic"
              label="Email*"
              variant="standard"
              color="secondary"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.email}
              validate={validateEmail}
            />
            {errors.email && touched.email ? (
              <p style={{ textAlign: "start", color: "red" }}>{errors.email}</p>
            ) : null}
            <br />
            <TextField
              id="outlined-basic"
              label="password*"
              type="password"
              variant="standard"
              color="secondary"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.password}
            />
            {errors.password && touched.password ? (
              <p style={{ textAlign: "start", color: "red" }}>
                {errors.password}
              </p>
            ) : null}
            <br />
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#202024" }}
            >
              Login
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
}

export default Login;

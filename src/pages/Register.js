import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import CITEDU from "../assets/imgs/CIT Education.png";
import LogoCIT from "../assets/imgs/Logo.jpg";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.facebook.com/citeducation3105">
        CIT Education
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Register() {
  var naviget = useNavigate();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setloading(false);
    }, 3000);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handledata = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    toast.success("redister SuccessFullly !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setTimeout(function () {
      naviget("/login");
    }, 3000);
  };
  return (
    <>
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20%" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: "flex", height: "100vh" }}>
          <Box
            component="img"
            sx={{
              height: "100vh",
              width: "50%",
            }}
            alt="CITEDU"
            src={CITEDU}
          />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: 150,
                  marginBottom: "50px",
                }}
                alt="LogoCIT"
                src={LogoCIT}
              />
              <Typography component="h1" variant="h5">
                Sign up CIT Education
              </Typography>
              <Box
                component="form"
                sx={{ mt: 3 }}
                onSubmit={handleSubmit(handledata)}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("firstName")}
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      {...register("lastName")}
                      id="LastName"
                      label="LastName"
                      name="lastName"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      {...register("email")}
                      id="email"
                      label="Email Address"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      {...register("password")}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Agree with CIT Education's terms and conditions"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Box>
      )}
    </>
  );
}

export default Register;

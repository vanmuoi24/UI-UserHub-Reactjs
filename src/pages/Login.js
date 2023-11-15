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
import Logo from "../assets/imgs/Logo.jpg";
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

function Login() {
  var naver = useNavigate();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setloading(false);
    }, 2000);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handledata = (data) => {
    var data_register = JSON.parse(localStorage.getItem("data"));
    if (
      data.email == data_register.email &&
      data.password == data_register.password
    ) {
      toast.success("login successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        naver("/");
      }, 3000);
    } else {
      toast.error("Login error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
              height: "100%",
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
                }}
                alt="Logo"
                src={Logo}
              />
              <Typography component="h1" variant="h5">
                Sign in CIT Education
              </Typography>
              <Box
                component="form"
                sx={{ mt: 3 }}
                onSubmit={handleSubmit(handledata)}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      {...register("email")}
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                    />
                    <Typography
                      sx={{ fontSize: "12px", marginTop: "7px" }}
                      color="tomato"
                    ></Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("password")}
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                    />
                    <Typography
                      sx={{ fontSize: "12px", marginTop: "7px" }}
                      color="tomato"
                    ></Typography>
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
                  Sign In
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/register" variant="body2">
                      Don't have an account? Sign Up
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
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </Box>
      )}
    </>
  );
}

export default Login;

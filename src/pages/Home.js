import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Logo from "../assets/imgs/Logo.jpg";
function Home() {
  const nav = useNavigate();
  const local_login = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    const local_login = JSON.parse(localStorage.getItem("data"));
    if (!local_login) {
      nav("/register");
    }
  });
  const handel = () => {
    localStorage.removeItem("data");
    nav("/register");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          justifyContent: "end",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Avatar alt="Remy Sharp" src={Logo} />
        <Typography>
          {local_login.firstName + " " + local_login.lastName}
        </Typography>
        <Button variant="contained" onClick={handel}>
          Log out
        </Button>
      </Box>
    </>
  );
}

export default Home;

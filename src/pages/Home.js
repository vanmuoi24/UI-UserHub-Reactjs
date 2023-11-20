import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Logo from "../assets/imgs/Logo.jpg";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
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
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "frtstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
  ];
  const [api, setApi] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://65329e22d80bd20280f5d66a.mockapi.io/uerr"
        );
        console.log(response.data);
        setApi(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const rows = api;
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
      <div
        style={{
          height: 400,
          width: "40%",
          marginLeft: "25%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default Home;

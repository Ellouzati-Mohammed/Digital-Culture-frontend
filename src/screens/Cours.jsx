import React from "react";

import { Container,Card,CardMedia } from "@mui/material";

const Vidio=()=>{
     return (
     <iframe
        style={{ width: "100%", height: "80vh" }}
        src="https://www.youtube.com/embed/4E90e13_-2A"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    ></iframe>) ;
}
function Cours() {
  return (
    <Container 
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", p: 2 }}
    >
      <Card sx={{ width: "100%", borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
        <Vidio/>
      </Card>
    </Container>
  );
}

export default Cours;


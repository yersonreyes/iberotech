import { Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PopUp } from "../components/PopUp";

export const HostIdPage = () => {
  const [host, setHost] = useState({});
  const hosts = useSelector((state) => state.host.hosts);
  const params = useParams();

  useEffect(() => {
    const result = hosts.filter((item) => item.id === params.id);
    setHost(result[0]);
  }, []);

  return (
    <Container
      className="box-shadow animate__animated animate__fadeIn animate__faster"
      maxWidth="lg"
    >
      <Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Nº de serie: {host.serie}</Typography>
          <Typography>
            {host.model} / marca: {host.marca}
          </Typography>
          <Divider />
          <Typography variant="body1">Fecha de ingreso: {host.date}</Typography>
          <Typography variant="body1"> Tipo: {host.tipo}</Typography>
          <PopUp setHost={setHost} host={host} />
        </Grid>
      </Grid>
    </Container>
  );
};

import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateHost } from "../../firebase/providerDB";
import { HostDescription } from "../components/HostDescription";
import { HostState } from "../components/HostState";
import { NewDescription } from "../components/NewDescription";
import { PopUp } from "../components/PopUp";
import { UserAcordion } from "../components/UserAcordion";

export const HostIdPage = () => {
  const [host, setHost] = useState({});
  const hosts = useSelector((state) => state.host.hosts);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const result = hosts.filter((item) => item.id === params.id);
    setHost(result[0]);
  }, []);

  const onNavigate = () => {
    navigate(`/host`);
  };

  const saveHost = async () => {
    const data = {
      almacenamiento: host.almacenamiento,
      date: host.date,
      description: host.description,
      macEthernet: host.macEthernet,
      macWifi: host.macWifi,
      marca: host.marca,
      model: host.model,
      proce: host.proce,
      ram: host.ram,
      serie: host.serie,
      state: host.state,
      tipo: host.tipo,
      ubicacion: host.ubicacion,
      user: host.user,
      activeUser: host.user[0].userName,
      observaciones: host.observaciones,
    };
    console.log(data);
    await updateHost(host.id, data);
    navigate(`/host`);
  };
  return (
    <Container
      className="box-shadow animate__animated animate__fadeIn animate__faster"
      maxWidth="lg"
    >
      <Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Datos</Typography>
          <Typography variant="body1">Nº de serie: {host.serie}</Typography>
          <Typography variant="body1">Fecha de ingreso: {host.date}</Typography>
          <Typography variant="body1"> Tipo: {host.tipo}</Typography>
          <Typography variant="body1">Modelo: {host.model}</Typography>
          <Typography variant="body1">Marca: {host.marca}</Typography>
          <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
          <Typography variant="h6"> Caracteristicas </Typography>
          <Typography variant="body1">Procesador: {host.proce}</Typography>
          <Typography variant="body1">Ram: {host.ram} GB</Typography>
          <Typography variant="body1">
            Almacenamiento: {host.almacenamiento} GB
          </Typography>
          <Typography variant="body1">
            Mac Ethernet: {host.macEthernet}
          </Typography>
          <Typography variant="body1">Mac Wifi: {host.macWifi}</Typography>
          <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
          <Typography variant="h6">Estado del equipo</Typography>
          <HostState setHost={setHost} host={host} />
          <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
          <Typography variant="h6"> Usuarios </Typography>
          <PopUp setHost={setHost} host={host} />
          {host.user ? <UserAcordion users={host.user} /> : <></>}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6">Observaciones</Typography>
          <HostDescription
            observaciones={host.observaciones ? host.observaciones : []}
          />
          <NewDescription setHost={setHost} host={host} />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Button onClick={onNavigate} variant="outlined">
          Volver
        </Button>
        <Button onClick={saveHost} variant="contained">
          Guardar cambios{" "}
        </Button>
      </Box>
    </Container>
  );
};

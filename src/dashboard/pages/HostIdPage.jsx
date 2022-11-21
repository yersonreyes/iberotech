import {
  Button,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadPdf } from "../../firebase/providerStorage";

export const HostIdPage = () => {
  const [host, setHost] = useState({});
  const hosts = useSelector((state) => state.host.hosts);
  const params = useParams();

  useEffect(() => {
    const result = hosts.filter((item) => item.id === params.id);
    setHost(result[0]);
  }, []);

  const startUploadPdf = async (e) => {
    try {
      const result = await uploadPdf(e.target.files[0]);
      console.log(result);
    } catch (error) {
      console.log(error);
      alert("fallo interno al intentar subir el archivo");
    }
  };
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
        </Grid>
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          item
          xs={12}
          md={6}
        >
          <Typography variant="body1"> Asignar nuevo usuario</Typography>
          <FormControl sx={{ marginTop: "1rem" }} variant="standard" fullWidth>
            <TextField
              type="date"
              label="Fecha de ingreso"
              variant="standard"
              sx={{ marginTop: "1rem" }}
            />
            <TextField
              label="Nombre"
              variant="standard"
              sx={{ marginTop: "1rem" }}
            />
            <TextField
              label="Rut"
              variant="standard"
              sx={{ marginTop: "1rem" }}
            />
            <TextField
              label="Correo"
              variant="standard"
              sx={{ marginTop: "1rem" }}
            />
            <TextField
              type="file"
              label="Fecha de ingreso"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              onChange={(e) => startUploadPdf(e)}
            />
            <Box>
              <Button>Descargar plantilla</Button>
              <Button>Agregar nuevo usuario</Button>
            </Box>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

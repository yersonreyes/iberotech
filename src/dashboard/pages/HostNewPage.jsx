import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useForm } from "../../hooks/useForm";
import { date as dateFunction } from "../../helpers/getDate";
import { useNavigate } from "react-router-dom";
import { addNewHost } from "../../firebase/providerDB";

export const HostNewPage = () => {
  const {
    marca,
    date,
    ubicacion,
    proce,
    macEthernet,
    macWifi,
    serie,
    tipo,
    model,
    ram,
    state,
    almacenamiento,
    onInputChange,
  } = useForm({
    marca: "",
    date: dateFunction(),
    user: "",
    ubicacion: "",
    proce: "",
    macEthernet: "",
    macWifi: "",
    serie: "",
    tipo: "Notebook",
    model: "",
    ram: "",
    almacenamiento: "",
    state: "operativo",
  });

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/host`);
  };

  const startAddNewHost = () => {
    addNewHost({
      marca,
      date,
      user: [],
      ubicacion,
      proce,
      macEthernet,
      macWifi,
      serie,
      tipo,
      model,
      ram,
      almacenamiento,
      description: "",
      observaciones: [],
      state,
    });
    navigate(`/host`);
  };

  return (
    <Container
      className="box-shadow animate__animated animate__fadeIn animate__faster"
      maxWidth="lg"
      sx={{ paddingBottom: "3rem" }}
    >
      <Typography sx={{ marginTop: "1rem" }} variant="h4">
        Nuevo equipo
      </Typography>
      <Grid container sx={{ marginTop: "1rem" }} spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Modelo"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="model"
              value={model}
              onChange={onInputChange}
            />
            <TextField
              label="Marca"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="marca"
              value={marca}
              onChange={onInputChange}
            />
            <TextField
              label="N serie"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="serie"
              value={serie}
              onChange={onInputChange}
            />

            <TextField
              label="Ubicacion"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="ubicacion"
              value={ubicacion}
              onChange={onInputChange}
            />
          </FormControl>
          <FormControl sx={{ marginTop: "1rem" }} variant="standard" fullWidth>
            <InputLabel id="selectLabelTipo">Tipo</InputLabel>
            <Select
              labelId="selectLabelTipo"
              id="selectTipo"
              value={tipo}
              label="Tipo"
              name="tipo"
              onChange={onInputChange}
            >
              <MenuItem value={"Notebook"}>Notebook</MenuItem>
              <MenuItem value={"Desktop"}>Desktop</MenuItem>
              <MenuItem value={"All in one"}>All in one</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: "1rem" }} variant="standard" fullWidth>
            <InputLabel id="selectLabelState">Estado</InputLabel>
            <Select
              labelId="selectLabelState"
              id="selectState"
              value={state}
              label="Estado"
              name="state"
              onChange={onInputChange}
            >
              <MenuItem value={"operativo"}>Operativo</MenuItem>
              <MenuItem value={"Defectuoso"}>Defectuoso</MenuItem>
              <MenuItem value={"Perdido"}>Perdido</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: "1rem" }} variant="standard" fullWidth>
            <TextField
              type="date"
              label="Fecha de ingreso"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="date"
              value={date}
              onChange={onInputChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Procesador"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="proce"
              value={proce}
              onChange={onInputChange}
            />
            <TextField
              label="Ram"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="ram"
              value={ram}
              onChange={onInputChange}
            />
            <TextField
              label="Almacenamiento"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="almacenamiento"
              value={almacenamiento}
              onChange={onInputChange}
            />
            <TextField
              label="Mac Wifi"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="macWifi"
              value={macWifi}
              onChange={onInputChange}
            />
            <TextField
              label="Mac Ethernet"
              variant="standard"
              sx={{ marginTop: "1rem" }}
              name="macEthernet"
              value={macEthernet}
              onChange={onInputChange}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "1.5rem" }}>
        <Button onClick={startAddNewHost} variant="contained">
          Agregar
        </Button>
        <Button
          onClick={onNavigate}
          sx={{ marginLeft: "1rem" }}
          variant="outlined"
        >
          Volver
        </Button>
      </Box>
    </Container>
  );
};

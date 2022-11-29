import {
  Alert,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { uploadPdf } from "../../firebase/providerStorage";
import { date } from "../../helpers/getDate";
import { useForm } from "../../hooks/useForm";

export const AddNewUserHost = ({ setOpen, host, setHost }) => {
  const [newPdf, setNewPdf] = useState("");
  const [stateButton, setStateButton] = useState(true);
  const [stateForm, setStateForm] = useState(false);
  const { email, rut, userName, newDate, onInputChange } = useForm({
    newDate: date(),
    userName: "",
    rut: "",
    email: "",
  });

  const startUploadPdf = async (e) => {
    try {
      const result = await uploadPdf(e.target.files[0]);
      setNewPdf(result);
      setStateButton(false);
    } catch (error) {
      console.log(error);
      alert("fallo interno al intentar subir el archivo");
    }
  };

  const addNewUserHost = () => {
    setStateForm(false);
    if (
      newPdf === "" ||
      email === "" ||
      rut === "" ||
      userName === "" ||
      newDate === ""
    ) {
      setStateForm(true);
      return;
    }
    const data = {
      newPdf,
      email,
      rut,
      userName,
      newDate,
    };
    setHost({ ...host, user: [...host.user, data] });
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="body1"> Asignar nuevo usuario</Typography>
      <FormControl sx={{ marginTop: "1rem" }} variant="standard" fullWidth>
        <TextField
          type="date"
          label="Fecha de recepcion"
          variant="standard"
          sx={{ marginTop: "1rem" }}
          name="newDate"
          value={newDate}
          onChange={onInputChange}
        />
        <TextField
          label="Nombre"
          variant="standard"
          sx={{ marginTop: "1rem" }}
          name="userName"
          value={userName}
          onChange={onInputChange}
        />
        <TextField
          label="Rut"
          variant="standard"
          sx={{ marginTop: "1rem" }}
          name="rut"
          value={rut}
          onChange={onInputChange}
        />
        <TextField
          label="Correo"
          variant="standard"
          sx={{ marginTop: "1rem" }}
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <TextField
          type="file"
          label="Fecha de ingreso"
          variant="standard"
          sx={{ marginTop: "1rem" }}
          onChange={(e) => startUploadPdf(e)}
        />
        {stateForm ? (
          <Alert sx={{ marginTop: "1rem" }} severity="error">
            Completa todos los campos
          </Alert>
        ) : (
          <></>
        )}

        <Box sx={{ marginTop: "0.5rem" }}>
          <Button
            target="_blank"
            href="https://firebasestorage.googleapis.com/v0/b/iberotech-c6df3.appspot.com/o/hosts%2FEntrega%20de%20Material%20tecnol%C3%B3gico.docx.pdf?alt=media&token=fec1a1cb-143a-434f-9973-f3cf1c03d08f"
            sx={{ marginTop: "1rem" }}
            variant="outlined"
          >
            Descargar plantilla
          </Button>
          <Button
            sx={{ marginTop: "1rem" }}
            variant="contained"
            disabled={stateButton}
            onClick={addNewUserHost}
          >
            Agregar nuevo usuario
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

import { Button, FormControl, TextField, Typography } from "@mui/material";
import { date as newDate } from "../../helpers/getDate";
import { useForm } from "../../hooks/useForm";

export const NewDescription = ({ setHost, host }) => {
  const { date, observacion, onInputChange, onResetForm } = useForm({
    observacion: "",
    date: newDate(),
  });

  const addNewObservacion = () => {
    setHost({
      ...host,
      observaciones: [{ date, observacion }, ...host.observaciones],
    });
  };
  return (
    <>
      <Typography>Agrega una nueva observacion</Typography>
      <FormControl fullWidth variant="standard">
        <TextField
          id="standard-basic"
          label="Nueva observacion"
          variant="standard"
          name="observacion"
          value={observacion}
          onChange={onInputChange}
        />
        <Button
          onClick={addNewObservacion}
          sx={{ marginTop: "1rem" }}
          variant="contained"
        >
          Agregar
        </Button>
      </FormControl>
    </>
  );
};

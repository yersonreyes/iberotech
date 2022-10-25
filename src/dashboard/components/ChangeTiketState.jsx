import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { UpdatedStateTicket } from "../../firebase/providerDB";
import { useForm } from "../../hooks/useForm";

export const ChangeTiketState = ({ id, ticketState }) => {
  const initialState = { newState: ticketState };
  const navigate = useNavigate();
  const { newState, onInputChange } = useForm(initialState);

  const onNavigate = () => {
    navigate(`/ticket`);
  };

  const updated = () => {
    console.log(id, newState);
    UpdatedStateTicket(id, newState);
    navigate(`/ticket`);
  };

  return (
    <>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Estado</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newState}
            label="Estado"
            name="newState"
            onChange={onInputChange}
          >
            <MenuItem value={"new"}>Tiket NUevo </MenuItem>
            <MenuItem value={"approved"}>Tiket resuelto</MenuItem>
            <MenuItem value={"process"}>Tiket en revision</MenuItem>
            <MenuItem value={"error"}>Tiket con problemas</MenuItem>
          </Select>
          <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Button onClick={updated} sx={{ width: "50%" }} variant="contained">
              Actualizar
            </Button>
            <Button
              onClick={onNavigate}
              sx={{ width: "50%" }}
              variant="outlined"
            >
              Volver
            </Button>
          </Box>
        </FormControl>
      </Grid>
    </>
  );
};

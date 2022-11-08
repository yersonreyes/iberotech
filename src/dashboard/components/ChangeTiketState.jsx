import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdatedStateTicket } from "../../firebase/providerDB";
import { useForm } from "../../hooks/useForm";

export const ChangeTiketState = ({ id, ticketState }) => {
  const { rol } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { newState, onInputChange } = useForm({ newState: ticketState });

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
          {rol === "admin" ? (
            <>
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="newState"
                value={newState}
                label="Estado"
                onChange={onInputChange}
              >
                <MenuItem value={"new"}>Tiket Nuevo </MenuItem>
                <MenuItem value={"approved"}>Tiket resuelto</MenuItem>
                <MenuItem value={"process"}>Tiket en revision</MenuItem>
                <MenuItem value={"error"}>Tiket con problemas</MenuItem>
              </Select>
            </>
          ) : (
            <></>
          )}
          <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            {rol === "admin" ? (
              <Button
                onClick={updated}
                sx={{ width: "50%" }}
                variant="contained"
              >
                Actualizar
              </Button>
            ) : (
              <></>
            )}
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

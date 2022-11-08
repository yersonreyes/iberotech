import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { changeRol } from "../../firebase/providerDB";
import { useForm } from "../../hooks/useForm";
export const CardUser = ({ user }) => {
  const [disableButton, setDisableButton] = useState(false);
  const { newRol, onInputChange } = useForm({
    newRol: user.rol,
  });

  const onChangeRol = () => {
    changeRol(user.id, newRol);
    setDisableButton(true);
  };
  return (
    <Grid item>
      <Card sx={{ height: 240, width: 280, marginTop: "1rem", flexShrink: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.userName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rol: {user.rol}
          </Typography>
        </CardContent>
        <CardActions>
          <FormControl fullWidth>
            {disableButton ? (
              <></>
            ) : (
              <>
                <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="newRol"
                  value={newRol}
                  label="Rol"
                  onChange={onInputChange}
                >
                  <MenuItem value={"user"}>User</MenuItem>
                  <MenuItem value={"operador"}>Operador</MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                </Select>
              </>
            )}

            <Button disabled={disableButton} onClick={onChangeRol}>
              {disableButton ? "ROl cambiado con exito" : "Cambiar ROl"}
            </Button>
          </FormControl>
        </CardActions>
      </Card>
    </Grid>
  );
};

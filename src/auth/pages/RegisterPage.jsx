import {
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const initalState = {
  displayName: "",
  email: "",
  password1: "",
  password2: "",
};
export const RegisterPage = () => {
  const [errorpassword, setErrorpassword] = useState(false);
  const { displayName, email, password1, password2, onInputChange, formState } =
    useForm(initalState);

  const { errorMesage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onRegister = (e) => {
    e.preventDefault();
    if (password1 != password2) {
      setErrorpassword(true);
      return;
    }
    dispatch(
      startCreatingUserWithEmailPassword({
        displayName,
        email,
        password: password1,
      })
    );
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow animate__animated animate__fadeIn animate__faster"
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Registrate
        </Typography>
        <form onSubmit={onRegister}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Usuario"
                type="text"
                placeholder="Usuario"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password1"
                value={password1}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Repita su contraseña"
                type="password"
                placeholder="Repita su contraseña"
                fullWidth
                name="password2"
                value={password2}
                onChange={onInputChange}
              />
            </Grid>
            {errorMesage || errorpassword ? (
              <Grid sx={{ mt: 1, width: "100%" }}>
                <Alert severity="error">
                  {errorpassword ? "Las contraseñas no cionciden" : errorMesage}
                </Alert>
              </Grid>
            ) : (
              <></>
            )}
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Registrar
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ya tienes una cuenta?
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

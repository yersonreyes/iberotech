import { Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const AccesDenegate = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Grid
      className="box-shadow animate__animated animate__fadeIn animate__faster"
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
        <Typography variant="p" sx={{ mb: 1 }}>
          En estos momentos un administrador esta verificado tus datos para
          proporcionarte acceso a la plataforma, intenta acceder mas tarde
        </Typography>
        <Button onClick={onLogout}>Cerrar sesion</Button>
      </Grid>
    </Grid>
  );
};

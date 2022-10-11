import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const DashboardPages = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <>
      <Typography variant="h1" component="h1">
        Hola Mundo
      </Typography>
      <Button onClick={onLogout} type="submit" variant="contained" fullWidth>
        Cerrar sesion
      </Button>
    </>
  );
};

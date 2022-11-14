import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TableHost } from "../components/TableHost";

export const HostPages = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/host/new`);
  };
  return (
    <Container
      className="box-shadow animate__animated animate__fadeIn animate__faster"
      maxWidth="lg"
    >
      <Grid
        className="box-shadow animate__animated animate__fadeIn animate__faster"
        container
        direction="column"
        gap={2}
        sx={{ paddingTop: "1rem" }}
      >
        <Grid item>
          <Button onClick={() => onNavigate()} variant="contained">
            Agregar nuevo equipo
          </Button>
        </Grid>
        <Grid>
          <TableHost />
        </Grid>
      </Grid>
    </Container>
  );
};

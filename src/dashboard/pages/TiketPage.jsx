import { Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CardTiket } from "../components/CardTiket";

export const TiketPage = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(`/tiket/new`);
  };
  return (
    <Container maxWidth="lg">
      <Grid container direction="column" sx={{ paddingTop: "1rem" }}>
        <Grid item>
          <Button onClick={() => onNavigate()} variant="contained">
            Ingresar nuevo Tiket
          </Button>
        </Grid>
        <Grid item>
          <CardTiket
            state="new"
            title="Problemas con proyector 2bb"
            user="Yerson Reyes"
            date="28/05/2022"
            description="el cable del proyector esta cortano no funciona como corresponde"
            id="aaaa"
          />
          <CardTiket
            state="new"
            title="Problemas con proyector 2bb"
            user="Yerson Reyes"
            date="28/05/2022"
            description="el cable del proyector esta cortano no funciona como corresponde"
            id="aaaa"
          />
          <CardTiket
            state="new"
            title="Problemas con proyector 2bb"
            user="Yerson Reyes"
            date="28/05/2022"
            description="el cable del proyector esta cortano no funciona como corresponde"
            id="aaaa"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

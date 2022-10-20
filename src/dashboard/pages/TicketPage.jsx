import { Button, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGetTickets } from "../../store/ticket/thunks";

import { CardTiket } from "../components/CardTiket";

export const TicketPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetTickets());
  }, []);

  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(`/ticket/new`);
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

import { Button, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGetTickets } from "../../store/ticket/thunks";

import { CardTiket } from "../components/CardTiket";

export const TicketPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetTickets());
  }, []);
  const tickets = useSelector((state) => state.ticket.tickets);

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
          {tickets.map(
            ({ state, title, userName, created, description, id }) => (
              <CardTiket
                key={id}
                state={state}
                title={title}
                user={userName}
                date={created}
                description={description}
                id={id}
              />
            )
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

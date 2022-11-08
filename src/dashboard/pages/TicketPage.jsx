import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compare } from "../../helpers/compare";
import { startGetTickets } from "../../store/ticket/thunks";

import { CardTiket } from "../components/CardTiket";

export const TicketPage = () => {
  useEffect(() => {
    dispatch(startGetTickets());
  }, []);

  const tickets = useSelector((state) => state.ticket.tickets);
  const [ticketsList, setTicketsList] = useState([]);

  useEffect(() => {
    const newData = tickets.slice().sort(compare);
    setTicketsList(newData.reverse());
  }, [tickets]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/ticket/new`);
  };

  const filterByState = (filter) => {
    const data = tickets.filter((ticket) => {
      return ticket.state === filter;
    });
    const newdata = data.slice().sort(compare).reverse();
    setTicketsList(newdata);
  };

  const noneFIlter = () => {
    const newData = tickets.slice().sort(compare);
    setTicketsList(newData.reverse());
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
        sx={{ paddingTop: "1rem" }}
      >
        <Grid item>
          <Button onClick={() => onNavigate()} variant="contained">
            Ingresar nuevo Ticket
          </Button>
          <Typography sx={{ paddingTop: "1rem" }}>Ordenar por:</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              paddingTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Button onClick={() => filterByState("new")}>Nuevos</Button>
            <Button onClick={() => filterByState("approved")}>Resueltos</Button>
            <Button onClick={() => filterByState("process")}>Revisados</Button>
            <Button onClick={() => filterByState("error")}>Problemas</Button>
            <Button onClick={() => noneFIlter()}>Todos</Button>
          </Box>
        </Grid>
        <Grid item>
          {ticketsList.map(
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

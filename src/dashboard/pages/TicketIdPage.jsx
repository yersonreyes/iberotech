import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  List,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MessageItem } from "../components/MessageItem";

export const TicketIdPage = () => {
  const [ticket, setTicket] = useState({});
  const [threadList, setThreadList] = useState([]);
  const tickets = useSelector((state) => state.ticket.tickets);
  const params = useParams();

  useEffect(() => {
    const result = tickets.filter((item) => item.id === params.id);
    setTicket(result[0]);
    setThreadList(result[0].thread);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="column"
            sx={{ paddingTop: "1rem", gap: "1rem" }}
          >
            <Grid item>
              <Typography variant="h4">{ticket.title}</Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                gap: "0.5rem",
                transform: "translate(0px, -8px) ",
              }}
            >
              <Typography variant="body2">
                Creado por: {ticket.userName}
              </Typography>
              <Typography variant="body2">{ticket.created}</Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1">
                Descripcion: {ticket.description}
              </Typography>
            </Grid>

            <Grid item>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                <Select labelId="demo-simple-select-label">
                  <MenuItem value={10}>Nuevo ticket</MenuItem>
                  <MenuItem value={20}>Revisando</MenuItem>
                  <MenuItem value={30}>Terminado</MenuItem>
                </Select>

                <Button>Actualizar</Button>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="column"
            sx={{ paddingTop: "1rem", gap: "1rem" }}
          >
            <Grid item>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                {threadList.map((message) => (
                  <MessageItem
                    userName={message.userName}
                    email={message.email}
                    photoUrl={message.userName}
                    text={message.text}
                  />
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

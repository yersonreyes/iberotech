import {
  Box,
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
import { useNavigate, useParams } from "react-router-dom";
import { UpdatedStateTicket } from "../../firebase/providerDB";
import { useForm } from "../../hooks/useForm";
import { MessageItem } from "../components/MessageItem";

export const TicketIdPage = () => {
  const [ticket, setTicket] = useState({});
  const [threadList, setThreadList] = useState([]);
  const tickets = useSelector((state) => state.ticket.tickets);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const result = tickets.filter((item) => item.id === params.id);
    setTicket(result[0]);
    setThreadList(result[0].thread);
  }, []);

  const { newState, onInputChange } = useForm({ newState: "new" });

  const onNavigate = () => {
    navigate(`/ticket`);
  };

  const updated = () => {
    UpdatedStateTicket(params.id, newState);
    navigate(`/ticket`);
  };

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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newState}
                  label="Estado"
                  name="newState"
                  onChange={onInputChange}
                >
                  <MenuItem value={"new"}>Tiket NUevo </MenuItem>
                  <MenuItem value={"approved"}>Tiket resuelto</MenuItem>
                  <MenuItem value={"process"}>Tiket en revision</MenuItem>
                  <MenuItem value={"error"}>Tiket con problemas</MenuItem>
                </Select>
                <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                  <Button
                    onClick={updated}
                    sx={{ width: "50%" }}
                    variant="contained"
                  >
                    Actualizar
                  </Button>
                  <Button
                    onClick={onNavigate}
                    sx={{ width: "50%" }}
                    variant="outlined"
                  >
                    Volver
                  </Button>
                </Box>
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
                {threadList.map((message, index) => (
                  <MessageItem
                    key={index}
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

import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { date } from "../../helpers/getDate";
import { useForm } from "../../hooks/useForm";
import { startAddNewTiket } from "../../store/ticket/thunks";

export const TicketNewPage = () => {
  const { email, displayName } = useSelector((state) => state.auth);

  const initalState = {
    state: "new",
    created: date(),
    title: "",
    description: "",
    userName: displayName,
    email: email,
    thread: [],
  };

  const { title, description, onInputChange, formState } = useForm(initalState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onNavigate = () => {
    navigate("/ticket");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startAddNewTiket(formState));
    onNavigate("/ticket");
  };
  return (
    <Container
      className="box-shadow animate__animated animate__fadeIn animate__faster"
      maxWidth="lg"
    >
      <Typography variant="h3" sx={{ paddingTop: "1rem" }}>
        Ingresa tu tiket
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid
          container
          direction="column"
          sx={{ paddingTop: "1rem", gap: "1rem" }}
        >
          <TextField
            type="text"
            fullWidth
            label="Titulo"
            placeholder="Titulo"
            name="title"
            value={title}
            onChange={onInputChange}
          />

          <TextField
            type="text"
            fullWidth
            multiline
            rows={4}
            label="Descripcion"
            placeholder="Descripcion"
            name="description"
            value={description}
            onChange={onInputChange}
          />
        </Grid>
        <Grid
          container
          direction="row"
          sx={{ paddingTop: "1rem", gap: "1rem" }}
        >
          <Button type="submit" variant="contained">
            Enviar Nuevo tiket
          </Button>
          <Button onClick={onNavigate} variant="outlined">
            Volver
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

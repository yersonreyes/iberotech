import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TableHost } from "../components/TableHost";
import { useEffect } from "react";
import { startGetHosts } from "../../store/host/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const HostPages = () => {
  const [hostfiltered, setHostfiltered] = useState([]);
  const hosts = useSelector((state) => state.host.hosts);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetHosts());
  }, []);

  useEffect(() => {
    setHostfiltered(hosts);
  }, [hosts]);

  const filterByName = () => {
    const data = hosts.filter((item) => item.activeUser.includes("ger"));
    setHostfiltered(data);
  };

  const onNavigate = () => {
    navigate(`/host/new`);
  };

  return (
    <Container
      className="box-shadow animate__animated animate__fadeIn animate__faster"
      maxWidth="lg"
    >
      <Button onClick={filtrado}>Filtrar</Button>
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
          <TableHost hosts={hostfiltered} />
        </Grid>
      </Grid>
    </Container>
  );
};

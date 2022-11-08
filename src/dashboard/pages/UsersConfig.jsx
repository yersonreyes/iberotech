import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startGetUsers } from "../../store/users/thunks";
import { CardUser } from "../components/CardUser";

export const UsersConfig = () => {
  const users = useSelector((state) => state.user.users);
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();
  const { search, onInputChange } = useForm({
    search: "",
  });
  useEffect(() => {
    dispatch(startGetUsers());
  }, []);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  useEffect(() => {
    if (search === "") {
      setUserList(users);
    }
  }, [search]);

  const filterUser = (filter) => {
    if (filter === "") return;
    const data = users.filter((user) => {
      return user.id === filter;
    });
    setUserList(data);
  };

  return (
    <Container
      className="box-shadow animate__animated animate__fadeIn animate__faster"
      maxWidth="lg"
    >
      <Grid container direction="column">
        <Grid item>
          <Typography gutterBottom variant="h6" sx={{ marginTop: "1rem" }}>
            Ingresa el correo del usuario que quieres buscar
          </Typography>
          <FormControl
            sx={{
              marginTop: "1rem",
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Busqueda"
              variant="outlined"
              name="search"
              value={search}
              onChange={onInputChange}
            />
            <Button onClick={() => filterUser(search)}>Buscar</Button>
          </FormControl>
        </Grid>

        <Grid
          container
          className="box-shadow animate__animated animate__fadeIn animate__faster"
          direction="row"
          gap={2}
        >
          {userList.map((user) => (
            <CardUser key={user.id} user={user} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

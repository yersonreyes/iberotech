import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { CardTiket } from "../components/CardTiket";

export const TiketPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container direction="column" sx={{ paddingTop: "1rem" }}>
        <Grid item>
          <Button variant="contained">Ingresar nuevo Tiket</Button>
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
        </Grid>
      </Grid>
    </Container>
  );
};

import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export const CardTiket = ({ state, title, date, description, user, id }) => {
  return (
    <Card sx={{ Width: "100%", marginTop: "1rem" }}>
      {state === "new" ? (
        <Alert severity="warning">Nuevo tiket ingresado</Alert>
      ) : state === "error" ? (
        <Alert severity="error">Tiket con problemas</Alert>
      ) : state === "process" ? (
        <Alert severity="info">Tiket en revision</Alert>
      ) : state === "approved" ? (
        <Alert severity="success">Tiket resuelto</Alert>
      ) : (
        <></>
      )}

      <CardHeader title={title} subheader={`${user} ${date} `} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver</Button>
      </CardActions>
    </Card>
  );
};

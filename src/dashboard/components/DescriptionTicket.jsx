import { Grid, Typography } from "@mui/material";

export const DescriptionTicket = ({
  title,
  userName,
  created,
  description,
}) => {
  return (
    <>
      <Grid item>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          gap: "0.5rem",
          transform: "translate(0px, -8px) ",
        }}
      >
        <Typography variant="body2">Creado por: {userName}</Typography>
        <Typography variant="body2">{created}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1">Descripcion: {description}</Typography>
      </Grid>
    </>
  );
};

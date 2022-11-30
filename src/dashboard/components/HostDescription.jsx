import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const HostDescription = ({ observaciones }) => {
  return (
    <>
      {observaciones.map((item) => (
        <Box>
          <Typography variant="caption">Fecha: {item.date}</Typography>
          <Typography variant="body1">{item.text}</Typography>
          <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
        </Box>
      ))}
    </>
  );
};

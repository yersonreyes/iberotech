import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

export function UserAcordion({ users }) {
  return (
    <div>
      {users.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {index === 0 ? "Usuario: " : ""}
              {item.userName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.newDate}</Typography>
            <Typography>{item.email}</Typography>
            <Typography>{item.rut}</Typography>
            <Button target="_blank" href={item.newPdf}>
              Ver recepcion de equipo
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

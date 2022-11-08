import { Grid, List } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ChangeTiketState } from "../components/ChangeTiketState";
import { DescriptionTicket } from "../components/DescriptionTicket";
import { MessageItem } from "../components/MessageItem";
import { NewMessageTicket } from "../components/NewMessageTicket";

export const TicketIdPage = () => {
  const [ticket, setTicket] = useState({});
  const [threadList, setThreadList] = useState([]);
  const params = useParams();
  const tickets = useSelector((state) => state.ticket.tickets);

  useEffect(() => {
    const result = tickets.filter((item) => item.id === params.id);
    setTicket(result[0]);
    setThreadList(result[0].thread);
  }, []);

  return (
    <Container
      className="box-shadow animate__animated animate__fadeIn animate__faster"
      maxWidth="lg"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="column"
            sx={{ paddingTop: "1rem", gap: "1rem" }}
          >
            <DescriptionTicket
              title={ticket.title}
              userName={ticket.userName}
              created={ticket.created}
              description={ticket.description}
            />
            <ChangeTiketState id={params.id} ticketState={ticket.state} />
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
            <NewMessageTicket
              id={params.id}
              threadList={threadList}
              setThreadList={setThreadList}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

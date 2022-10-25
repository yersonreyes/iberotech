import { Button, FormControl, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { sendNewMessage } from "../../firebase/providerDB";
import { useForm } from "../../hooks/useForm";

export const NewMessageTicket = ({ id, threadList, setThreadList }) => {
  const { email, displayName, photoURL } = useSelector((state) => state.auth);
  const { newMessage, onInputChange, onResetForm } = useForm({
    newMessage: "",
  });
  const sendMessage = () => {
    const newElement = {
      email: email,
      photoUrl: photoURL,
      text: newMessage,
      userName: displayName,
    };
    const data = [...threadList, newElement];
    sendNewMessage(id, data);
    setThreadList(data);
    onResetForm();
  };
  return (
    <Grid item>
      <FormControl fullWidth>
        <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <TextField
            sx={{ width: "75%", marginLeft: "5rem" }}
            multiline
            maxRows={10}
            label="Nuevo mensaje"
            variant="standard"
            value={newMessage}
            name="newMessage"
            onChange={onInputChange}
          />
          <Box sx={{ width: "25%", position: "relative" }}>
            <Button
              onClick={sendMessage}
              sx={{ width: "25%", position: "absolute", bottom: "0" }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </FormControl>
    </Grid>
  );
};

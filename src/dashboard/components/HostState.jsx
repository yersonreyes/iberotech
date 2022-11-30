import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function HostState({ setHost, host }) {
  const onInputChange = (event) => {
    setHost({ ...host, state: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ marginTop: "1rem" }} variant="standard" fullWidth>
        <InputLabel id="selectLabelState">Estado</InputLabel>
        <Select
          labelId="selectLabelState"
          id="selectState"
          value={host.state ? host.state : ""}
          label="Estado"
          name="state"
          onChange={onInputChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"operativo"}>Operativo</MenuItem>
          <MenuItem value={"Defectuoso"}>Defectuoso</MenuItem>
          <MenuItem value={"Perdido"}>Perdido</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

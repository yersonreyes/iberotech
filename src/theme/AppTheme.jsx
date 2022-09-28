import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { theme } from "./theme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

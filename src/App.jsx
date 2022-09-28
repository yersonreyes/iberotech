import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
export const App = () => {
  return (
    <div>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </div>
  );
};

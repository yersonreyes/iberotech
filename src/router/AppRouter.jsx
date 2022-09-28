import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<DashboardRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
};

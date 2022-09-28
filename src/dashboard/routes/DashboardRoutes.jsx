import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPages } from "../pages/DashboardPages";
import { HostPages } from "../pages/HostPages";

export const DashboardRoutes = () => {
  return (
    <>
      <h1>nav</h1>
      <Routes>
        <Route path="/" element={<DashboardPages />} />
        <Route path="/host" element={<HostPages />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

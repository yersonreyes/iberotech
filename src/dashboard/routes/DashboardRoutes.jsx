import { Navigate, Route, Routes } from "react-router-dom";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";
import { DashboardPages } from "../pages/DashboardPages";
import { HostPages } from "../pages/HostPages";
import { TiketPage } from "../pages/TiketPage";

export const DashboardRoutes = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<DashboardPages />} />
        <Route path="/dashboard" element={<DashboardPages />} />
        <Route path="/host" element={<HostPages />} />
        <Route path="/tiket" element={<TiketPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

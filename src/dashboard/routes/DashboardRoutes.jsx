import { Navigate, Route, Routes } from "react-router-dom";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";
import { DashboardPages } from "../pages/DashboardPages";
import { HostPages } from "../pages/HostPages";
import { TiketIdPage } from "../pages/TiketIdPage";
import { TiketNewPage } from "../pages/TiketNewPage";
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
        <Route path="/tiket/new" element={<TiketNewPage />} />
        <Route path="/tiket/:id" element={<TiketIdPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

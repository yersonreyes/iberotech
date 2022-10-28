import { Navigate, Route, Routes } from "react-router-dom";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";
import { DashboardPages } from "../pages/DashboardPages";
import { HostPages } from "../pages/HostPages";
import { TicketIdPage } from "../pages/TicketIdPage";
import { TicketNewPage } from "../pages/TicketNewPage";
import { TicketPage } from "../pages/TicketPage";
import { UserPage } from "../pages/UserPage";

export const DashboardRoutes = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<DashboardPages />} />
        <Route path="/dashboard" element={<DashboardPages />} />
        <Route path="/host" element={<HostPages />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/ticket/new" element={<TicketNewPage />} />
        <Route path="/ticket/:id" element={<TicketIdPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

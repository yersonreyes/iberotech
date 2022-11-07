import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";
import { AccesDenegate } from "../pages/AccesDenegate";
import { DashboardPages } from "../pages/DashboardPages";
import { HostPages } from "../pages/HostPages";
import { TicketIdPage } from "../pages/TicketIdPage";
import { TicketNewPage } from "../pages/TicketNewPage";
import { TicketPage } from "../pages/TicketPage";
import { UserPage } from "../pages/UserPage";
import { UsersConfig } from "../pages/UsersConfig";

export const DashboardRoutes = () => {
  const { rol } = useSelector((state) => state.auth);
  return (
    <>
      {rol === "user" ? (
        <Routes>
          <Route path="/accesdenegate" element={<AccesDenegate />} />
          <Route path="/*" element={<Navigate to="/accesdenegate" />} />
        </Routes>
      ) : (
        <>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<DashboardPages />} />
            <Route path="/dashboard" element={<DashboardPages />} />
            <Route path="/host" element={<HostPages />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/usersconfig" element={<UsersConfig />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/ticket/new" element={<TicketNewPage />} />
            <Route path="/ticket/:id" element={<TicketIdPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </>
  );
};

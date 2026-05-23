import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import Reports from "../pages/Reports";
import Groups from "../pages/Groups";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
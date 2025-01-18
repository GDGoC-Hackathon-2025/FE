import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ComplainPage from "./pages/complain/Complain";
import Header from "./components/Header";
import ComplainCreatePage from "./pages/complain-create/ComplainCreatePage";
import FundingCreatePage from "./pages/funding-create/FundingCreatePage";

const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/auth" && <Header />}
      <Routes>
        <Route path="/" element={<ComplainPage />} />
        <Route path="/complain/create" element={<ComplainCreatePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/funding" element={""} />
        <Route path="/funding/create" element={<FundingCreatePage />} />
        <Route path="/payment" element={""} />
      </Routes>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default AppWrapper;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ComplainPage from "./pages/complain/Complain";
import Header from "./components/Header";
import ComplainCreatePage from "./pages/complain-create/ComplainCreatePage";

import ComplainDetail from "./pages/complain-detail/ComplainDetail";

import FundingCreatePage from "./pages/funding-create/FundingCreatePage";
import FundingList from "./pages/funding/FundingList";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ComplainPage />} />
        <Route path="/complain/:id" element={<ComplainDetail />} />
        <Route path="/complain/create" element={<ComplainCreatePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/funding" element={<FundingList />} />
        <Route path="/funding/create" element={<FundingCreatePage />} />
        <Route path="/payment" element={""} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

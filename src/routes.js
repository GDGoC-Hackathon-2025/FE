import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ComplainPage from "./pages/complain/Complain";
import Header from "./components/Header";
import ComplainCreatePage from "./pages/complain-create/ComplainCreatePage";
import FundingCreatePage from "./pages/funding-create/FundingCreatePage";
import FundingList from "./pages/funding/FundingList";
import LoginInfoPage from "./pages/login-info/LoginInfoPage";
import MyPage from "./pages/my/MyPage";
import FundingDetail from "./pages/funding-detail/FundingDetail";
import ComplainDetail from "./pages/complain-detail/ComplainDetail";
import Payment from "./pages/payment/Payment";

const AppRouter = () => {
  const location = useLocation();

  const hideHeaderPaths = ["/auth", "/auth/info"];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<ComplainPage />} />
        <Route path="/complain/:id" element={<ComplainDetail />} />
        <Route path="/complain/create" element={<ComplainCreatePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/auth/info" element={<LoginInfoPage />} />
        <Route path="/funding" element={<FundingList />} />
        <Route path="/funding/:id" element={<FundingDetail />} />
        <Route path="/funding/create" element={<FundingCreatePage />} />
        <Route path="/funding/payment" element={<Payment />} />
        <Route path="/my" element={<MyPage />} />
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

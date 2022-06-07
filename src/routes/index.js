import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFoundView from '../views/errors/PageNotFoundView';
import App from '../views/pages/DummyView';
import HomeView from '../views/pages/HomeView';
import LoginView from '../views/pages/LoginView';
import SignupView from '../views/pages/SignupView';
import HomeUserView from '../views/pages/HomeUserView';
import TripApproval from '../views/pages/TripApproval';
import DashboardHeader from '../components/Header/DashboardHeader';
import ProfileView from '../views/profile/ProfileView';
import EditRequestView from '../views/pages/EditRequestView';
import ResetForm from '../views/password/ResetForm';
import NewPasswordForm from '../views/password/NewPasswordForm';

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/dummy" element={<App />} />
      <Route path="/dashboard" element={<HomeUserView />} />
      <Route exact path="/profile" element={<ProfileView />} />
      <Route path="*" element={<PageNotFoundView />} />
      <Route path="/signup" element={<SignupView />} />
      <Route path="/trip/review" element={<TripApproval />} />
      <Route path="/header" element={<DashboardHeader />} />
      <Route path="/trip/edit" element={<EditRequestView />} />
      <Route exact path="/password/reset" element={<ResetForm />} />
      <Route exact path="/password/reset/:token" element={<NewPasswordForm />} />
    </Routes>
  </Router>
);

export default AllRoutes;

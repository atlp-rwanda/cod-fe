import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFoundView from '../views/errors/PageNotFoundView';
import App from '../views/pages/DummyView';
import HomeView from '../views/pages/HomeView';
import LoginView from '../views/pages/LoginView';
import SignupView from '../views/pages/SignupView';
import HomeUserView from '../views/pages/HomeUserView';
import TripApproval from '../views/pages/TripApproval';

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/dummy" element={<App />} />
      <Route path="/dashboard" element={<HomeUserView />} />
      <Route path="*" element={<PageNotFoundView />} />
      <Route path="/signup" element={<SignupView />} />
      <Route path="/approval" element={<TripApproval />} />
    </Routes>
  </Router>
);

export default AllRoutes;

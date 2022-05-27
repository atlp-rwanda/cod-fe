import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFoundView from '../views/PageNotFoundView';
import App from '../views/DummyView';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';
import HomeUserView from '../views/pages/HomeUserView';

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/dummy" element={<App />} />
      <Route path="/dashboard" element={<HomeUserView />} />
      <Route path="*" element={<PageNotFoundView />} />
      <Route path="/signup" element={<SignupView />} />
    </Routes>
  </Router>
);

export default AllRoutes;

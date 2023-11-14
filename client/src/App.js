import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import UserPage from './pages/UserPage';
import NavMenu from './components/NavMenu';
import RegistrationPage from './pages/RegistrationPage';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:idUser" element={<UserProfile />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

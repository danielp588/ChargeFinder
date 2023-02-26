import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContextProvider from './context/UserContext';

// Pages
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={
            <UserContextProvider>
              <RegisterPage />
            </UserContextProvider>
          } />

          <Route path="login" element={
            <UserContextProvider>
              <LoginPage />
            </UserContextProvider>
          } />

           <Route path="profile" element={
            <UserContextProvider>
              <ProfilePage />
            </UserContextProvider>
          } />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

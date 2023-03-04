import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContextProvider from './context/UserContext';
import './styles/index.css'


// Pages
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditPage from './pages/EditPage';
import AdminPanelPage from './pages/AdminPanelPage'

function App() {

  return (
    <>
      <BrowserRouter>

       <Routes>

          <Route path="/" element={
            <UserContextProvider>
              <LoginPage />
            </UserContextProvider>
          } />

          <Route path="/register" element={
            <UserContextProvider>
              <RegisterPage />
            </UserContextProvider>
          } />

           <Route path="/profile" element={
            <UserContextProvider>
              <ProfilePage />
            </UserContextProvider>
          } />

          <Route path="/edit" element={
            <UserContextProvider>
              <EditPage />
            </UserContextProvider>
          } />

          <Route path="/admin" element={
            <UserContextProvider>
              <AdminPanelPage />
            </UserContextProvider>
          } />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

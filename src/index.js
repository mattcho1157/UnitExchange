import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'

import './index.css'
import SessionJoin from './pages/SessionJoin'
import Admin from './pages/Admin'
import reportWebVitals from './reportWebVitals'
import AdminProtectedRoute from './components/AdminProtectedRoute'

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SessionJoin />} />
        <Route path='/admin' element={
          <AdminProtectedRoute element={<Admin />} redirect='/' />
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

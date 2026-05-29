import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/dashboard';
import Navbar from './navbar';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [logged,setLogged]=useState(false);

  if (!logged) {
    return (
      <main className="main-page">
        <Login
          email={email}
          password={password}
          onEmailChange={e => setEmail(e.target.value)}
          onPasswordChange={e => setPassword(e.target.value)}
          onLogin={(e)=>{e.preventDefault(); setLogged(true);}}
        />
      </main>
    );
  }

  return (
    <main className="app-shell">
      <Routes>
        <Route path="/" element={<Dashboard userName={email} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}


 
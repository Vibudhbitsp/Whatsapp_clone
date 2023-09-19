import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';
 
function App() {

  const[{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ):(
      <div className="app_body">
        <Router>
          
          <Sidebar /> {/* Move the Sidebar component here */}
          <Routes>
            <Route path="/" />
            <Route path="/rooms/:roomId" element={<Chat />} />
          </Routes>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;

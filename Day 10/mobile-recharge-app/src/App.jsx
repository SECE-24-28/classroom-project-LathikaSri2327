import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import NotificationContainer from './components/Notification';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Recharge from './pages/Recharge';
import Plans from './pages/Plans';
import History from './pages/History';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/recharge" element={<Recharge />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </main>
          <Footer />
          <NotificationContainer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
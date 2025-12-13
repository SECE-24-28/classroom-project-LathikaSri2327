import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header title="RechargeApp" />
        <HomePage />
      </div>
    </AppProvider>
  );
}

export default App;
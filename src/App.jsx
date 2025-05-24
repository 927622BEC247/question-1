import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import StockPage from './pages/StockPage';
import HeatmapPage from './pages/HeatmapPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <header className="app-header">
        <nav>
          <NavLink to="/" end>Stock Chart</NavLink>
          <NavLink to="/heatmap">Heatmap</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<StockPage />} />
          <Route path="/heatmap" element={<HeatmapPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

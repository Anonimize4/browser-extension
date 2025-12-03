import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SecurityDashboard from './components/ThreatDashboard';
import LinkAnalysis from './components/LinkAnalysis';
import ExtensionHeader from './components/ExtensionHeader';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <ExtensionHeader />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<SecurityDashboard />} />
            <Route path="/analysis" element={<LinkAnalysis />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

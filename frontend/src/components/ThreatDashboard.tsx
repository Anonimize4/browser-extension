import React, { useState, useEffect } from 'react';

interface ThreatData {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: string;
}

const ThreatDashboard: React.FC = () => {
  const [threats, setThreats] = useState<ThreatData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock data - in real app, fetch from backend API
    const mockThreats: ThreatData[] = [
      {
        id: '1',
        type: 'Phishing',
        severity: 'high',
        description: 'Suspicious link detected in email',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        type: 'Malware',
        severity: 'critical',
        description: 'Malicious script blocked',
        timestamp: new Date().toISOString()
      }
    ];

    setTimeout(() => {
      setThreats(mockThreats);
      setIsLoading(false);
    }, 1000);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return '#dc3545';
      case 'high': return '#fd7e14';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  };

  if (isLoading) {
    return <div className="loading">Loading security dashboard...</div>;
  }

  return (
    <div className="threat-dashboard">
      <h2>Security Threat Dashboard</h2>
      <div className="threats-container">
        {threats.length === 0 ? (
          <p>No threats detected. Your system is secure!</p>
        ) : (
          threats.map(threat => (
            <div key={threat.id} className="threat-card" style={{ borderLeftColor: getSeverityColor(threat.severity) }}>
              <div className="threat-header">
                <span className="threat-type">{threat.type}</span>
                <span className="threat-severity" style={{ backgroundColor: getSeverityColor(threat.severity) }}>
                  {threat.severity.toUpperCase()}
                </span>
              </div>
              <p className="threat-description">{threat.description}</p>
              <small className="threat-timestamp">
                {new Date(threat.timestamp).toLocaleString()}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ThreatDashboard;

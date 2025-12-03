import React, { useState } from 'react';

interface LinkResult {
  url: string;
  isSafe: boolean;
  riskScore: number;
  threats: string[];
  recommendations: string[];
}

const LinkAnalysis: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<LinkResult | null>(null);

  const analyzeLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    
    // Mock analysis - in real app, call backend API
    setTimeout(() => {
      const mockResult: LinkResult = {
        url,
        isSafe: Math.random() > 0.3,
        riskScore: Math.floor(Math.random() * 100),
        threats: ['Suspicious domain', 'Known phishing pattern'],
        recommendations: ['Avoid clicking this link', 'Report as spam']
      };
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getRiskLevel = (score: number) => {
    if (score >= 80) return { level: 'High Risk', color: '#dc3545' };
    if (score >= 50) return { level: 'Medium Risk', color: '#ffc107' };
    return { level: 'Low Risk', color: '#28a745' };
  };

  return (
    <div className="link-analysis">
      <h2>Link Analysis</h2>
      <form onSubmit={analyzeLink} className="analysis-form">
        <div className="input-group">
          <input
            type="url"
            placeholder="Enter URL to analyze..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit" disabled={isAnalyzing}>
            {isAnalyzing ? 'Analyzing...' : 'Analyze Link'}
          </button>
        </div>
      </form>

      {result && (
        <div className="analysis-result">
          <div className="result-header">
            <h3>Analysis Results</h3>
            <span 
              className="safety-badge"
              style={{ 
                backgroundColor: result.isSafe ? '#28a745' : '#dc3545' 
              }}
            >
              {result.isSafe ? 'SAFE' : 'UNSAFE'}
            </span>
          </div>

          <div className="risk-score">
            <span>Risk Score: </span>
            <span 
              className="score-value"
              style={{ color: getRiskLevel(result.riskScore).color }}
            >
              {result.riskScore}/100 - {getRiskLevel(result.riskScore).level}
            </span>
          </div>

          {result.threats.length > 0 && (
            <div className="threats-section">
              <h4>Detected Threats:</h4>
              <ul>
                {result.threats.map((threat, index) => (
                  <li key={index}>{threat}</li>
                ))}
              </ul>
            </div>
          )}

          {result.recommendations.length > 0 && (
            <div className="recommendations-section">
              <h4>Recommendations:</h4>
              <ul>
                {result.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkAnalysis;

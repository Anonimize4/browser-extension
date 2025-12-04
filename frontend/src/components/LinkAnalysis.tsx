import React, { useState } from 'react';
import { MLAnalysisService } from '../services/MLAnalysisService';
import type { LinkAnalysisResult } from '../services/MLAnalysisService';

const LinkAnalysis: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<LinkAnalysisResult | null>(null);

  const analyzeLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);

    try {
      const analysisResult = await MLAnalysisService.analyzeLink(url);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis failed:', error);
      // Fallback result
      setResult({
        url,
        isSafe: false,
        riskScore: 100,
        threats: ['Analysis failed'],
        recommendations: ['Try again later']
      });
    } finally {
      setIsAnalyzing(false);
    }
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

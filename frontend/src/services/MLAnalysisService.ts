const API_BASE_URL = 'http://localhost:5001/api';

export interface LinkAnalysisResult {
  url: string;
  isSafe: boolean;
  riskScore: number;
  threats: string[];
  recommendations: string[];
}

export class MLAnalysisService {
  static async analyzeLink(url: string): Promise<LinkAnalysisResult> {
    try {
      const response = await fetch(`${API_BASE_URL}/analyze-link`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error analyzing link:', error);
      // Fallback to mock data if API is unavailable
      return {
        url,
        isSafe: Math.random() > 0.3,
        riskScore: Math.floor(Math.random() * 100),
        threats: ['API unavailable - using mock data'],
        recommendations: ['Check API connection']
      };
    }
  }
}
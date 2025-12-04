const API_BASE_URL = 'http://localhost:5001/api';

export interface ThreatData {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: string;
}

export class ThreatService {
  static async getThreats(): Promise<ThreatData[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/threats`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching threats:', error);
      // Fallback to mock data if API is unavailable
      return [
        {
          id: '1',
          type: 'Phishing',
          severity: 'high',
          description: 'API unavailable - using mock data',
          timestamp: new Date().toISOString()
        }
      ];
    }
  }
}
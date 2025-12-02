// Configuration file for SecureLink Extension
const CONFIG = {
  // API Configuration
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8000',
  
  // Extension Settings
  EXTENSION_NAME: 'SecureLink Guardian',
  VERSION: '1.0.0',
  
  // Security Settings
  MAX_LOGIN_ATTEMPTS: 3,
  SESSION_TIMEOUT: 3600000, // 1 hour in milliseconds
  
  // Feature Flags
  ENABLE_ML_ANALYSIS: true,
  ENABLE_REAL_TIME_PROTECTION: true,
  
  // UI Settings
  THEME: 'dark',
  NOTIFICATION_DURATION: 5000,
  
  // Backend Configuration
  BACKEND_ENDPOINTS: {
    AUTH: '/api/auth',
    ANALYSIS: '/api/analyze',
    REPORT: '/api/report',
    WHITELIST: '/api/whitelist'
  }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else {
  window.CONFIG = CONFIG;
}

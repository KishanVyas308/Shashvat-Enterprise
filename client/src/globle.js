// Use localhost for local development, production API for deployed version
const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
export const backendUrl = isLocalDev ? "http://localhost:3000/api/v1" : "https://api.shashvatenterprise.com/api/v1";


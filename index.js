const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Add health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date(),
    environment: process.env.NODE_ENV
  });
});

app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.NODE_ENV} environment!`);
});

app.listen(port, () => {
  console.log(`App running in ${process.env.NODE_ENV} mode at http://localhost:${port}`);
  console.log(`API URL: ${process.env.API_URL}`);
}); 
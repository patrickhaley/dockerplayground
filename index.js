const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Add health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.get('/', (req, res) => {
  res.send('Hello from ECR!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App running in production mode at http://0.0.0.0:${port}`);
}); 
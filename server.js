const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Log every request to help with debugging
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
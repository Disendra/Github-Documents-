const express = require('express');
const app = express();
const port = 3000;

// Middleware to detect browser requests
app.use((req, res, next) => {
  const acceptHeader = req.headers['accept'];

  // Check if the request is likely coming from a browser
  if (acceptHeader && acceptHeader.includes('text/html')) {
    res.status(403).send(`
      <html>
        <head>
          <title>Access Forbidden</title>
        </head>
        <body>
          <h1>403 Forbidden</h1>
          <p>You do not have permission to access this resource directly.</p>
        </body>
      </html>
    `);
  } else {
    next();
  }
});

// Sample API route
app.get('/api/data', (req, res) => {
  const data = { id: 1, name: 'Sample Data' };
  res.json(data);
});

// Error handling middleware for other types of errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

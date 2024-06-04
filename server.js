const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server on port 3000 (or any port you prefer)
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const fs = require('fs');

// Port setup and listener
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('Server is running on PORT', PORT);
})

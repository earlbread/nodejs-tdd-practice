const express = require('express');
const app = express();
const server = app.listen(3000, () => {
  console.log('Express server has started on port 3000');
});

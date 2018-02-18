const { join } = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./api');

const dist = join(process.cwd(), 'dist');
const port = 3042;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('short'));
app.use(express.static(dist));
app.use('/api', api);

// To serve all unknown requests to homepage
// You need this when you're using history mode in client-side router
app.use(history({ index: '/' }));

app.get('/', (req, res) => {
  res.sendFile(join(dist, 'index.html'));
});

console.log(`==> 🌎\u00a0\u00a0API server is listening on port ${port}. Open up https://localhost:${port}/ in your browser.`);
app.listen(port);

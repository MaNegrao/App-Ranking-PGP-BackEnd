const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres Truco UFFS API' });
});

// quaquer rota que inicie com /api, é redirecionada p/ routes
app.use('/api', require('./routes'));

app.listen(port);

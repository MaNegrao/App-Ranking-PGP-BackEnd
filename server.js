const express = require('express')
const cors = require('cors')

const { Match } = require('./src/models');

const app = express()
var port = process.env.PORT || 8080;

app.use(express.json())
app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres Truco UFFS API' })
})

// quaquer rota que inicie com /api, é redirecionada p/ routes
app.use('/api', require('./src/routes'))

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

Match.create({
    date: new Date,
    status: 'playing'
});
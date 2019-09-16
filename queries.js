const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ntooewegrdsppa',
  host: 'ec2-54-83-33-14.compute-1.amazonaws.com',
  database: 'd95i0qida38ocu',
  password: 'f3f16e6612f7c15af4639553e8fe9874d8200954a2cfa22e895040bd5eff7733',
  port: 5432,
  ssl: true,
})


const getPlayers = (request, response) => {
    pool.query('SELECT * FROM player ORDER BY Id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const getPlayerById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM player WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const createPlayer = (request, response) => {
    const { name, email, pic, password, nick, wins } = request.body

    pool.query('INSERT INTO player (name, email, pic, password, nick, wins) VALUES ($1, $2, $3, $4, $5, $6)', 
    [name,email,pic,password,nick,wins], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(`Player added with ID: ${result.insertId}`)
    })
}

const updatePlayer = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email, pic, password, nick, wins } = request.body

    pool.query(
    'UPDATE player SET name = $1, email = $2, pic=$3, password=$4, nick=$5, wins=$6 WHERE Id = $',
    [name, email, pic, password, nick, wins, id],
    (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Player updated with ID: ${id}`)
    }
    )
}

const deletePlayer = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM player WHERE Id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Player deleted with ID: ${id}`)
    })
  }


module.exports = {
    getPlayers,
    getPlayerById,
    createPlayer,
    updatePlayer,
    deletePlayer,
}
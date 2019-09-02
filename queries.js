const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ntooewegrdsppa',
  host: 'ec2-54-83-33-14.compute-1.amazonaws.com',
  database: 'd95i0qida38ocu',
  password: 'f3f16e6612f7c15af4639553e8fe9874d8200954a2cfa22e895040bd5eff7733',
  port: 5432,
})


const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const createUser = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
        throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`User mod1d with ID: ${id}`)
    }
    )
}

const deleteUser = (request, response) => {1
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
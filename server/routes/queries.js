const Pool = require('pg').Pool
const pool = require('../config')

const getEmployees = (request, response) => {
  pool.query('SELECT * FROM Employee ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getEmployeeById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM Employee WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const createEmployee = (request, response) => {
  const { first_name , last_name , is_active , date_of_birth } = request.body

  pool.query('INSERT INTO Employee (first_name ,last_name , is_active , date_of_birth ) VALUES ($1,$2,$3,$4)', [first_name , last_name , is_active , date_of_birth], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Employee added with ID: ${results.insertId}`)
  })
}


const updateEmployee = (request, response) => {
  const id = parseInt(request.params.id)
  const { first_name , last_name , is_active , date_of_birth } = request.body

  pool.query(
    'UPDATE Employee SET first_name = $1, last_name = $2, is_active =$3, date_of_birth = $4 WHERE id = $5',
    [first_name , last_name , is_active , date_of_birth, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Employee modified with ID: ${id}`)
    }
  )
}


const deleteEmployee = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM Employee WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Employee deleted with ID: ${id}`)
  })
}


const deleteAllEmployees = (request, response) => {
  pool.query('DELETE FROM Employee', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Table cleared`)
  })
}










module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  deleteAllEmployees,

}
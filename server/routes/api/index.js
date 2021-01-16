try {
const express = require('express')
const bodyParser = require('body-parser')
const db = require('../queries')
const app = express()
const cors = require('cors');

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.get('/api/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})



app.get('/api/Employee', db.getEmployees)
app.get('/api/Employee/:id', db.getEmployeeById)
app.post('/api/Employee', db.createEmployee)
app.put('/api/Employee/:id', db.updateEmployee)
app.delete('/api/Employee/:id', db.deleteEmployee)
app.delete('/api/Employee',  db.deleteAllEmployees)

module.exports = app

}
catch (ex) {
    console.log('API Error', ex)
}

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 2020
const cors = require('cors');

app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})



app.get('/Employee', db.getEmployees)
app.get('/Employee/:id', db.getEmployeeById)
app.post('/Employee', db.createEmployee)
app.put('/Employee/:id', db.updateEmployee)
app.delete('/Employee/:id', db.deleteEmployee)
app.delete('/Employee',  db.deleteAllEmployees)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

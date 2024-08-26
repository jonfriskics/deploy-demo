import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.status(200).send(`Response received ${Date.now()}`)
})

app.listen(3000)
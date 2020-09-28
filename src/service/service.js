const express = require('express')
const commander = require('commander')

const { get } = require('./routes/routes')
const { logger } = require('./middlewares/middlewares')

const program = new commander.Command()
program.option('-p, --port <port>', 'Service port')
program.parse(process.argv)

const port = program.port || process.env.port || 3001

const app = express()
app.get('/lips/:w?/:h?/', logger, get)

app.listen(port, () => {
  console.log(`Lips ready at http://localhost:${port}`)
})
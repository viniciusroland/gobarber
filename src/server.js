const app = require('./app')
const port = 3333
app.listen(port, '192.168.0.12', () => {
  console.log('server running on port ', port)
})

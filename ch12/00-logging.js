const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const app = express()

if (process.env.NODE_ENV = null) {
    console.log('NODE_ENV is not defined')
    process.env.NODE_ENV = 'development'
}
  




switch(app.get('env')) 
{
  case 'development':
    app.use(morgan('dev'))
    break
  case 'production':
    const stream = fs.createWriteStream(__dirname + '/access.log',
      { flags: 'a' })
    app.use(morgan('combined', { stream }))
    break
}

app.get('*', (req, res) => res.send('hello!'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Express started in ` +
  `${app.get('env')} at http://localhost:${port}` +
  `; press Ctrl-C to terminate.`))


  $env:NODE_ENV='production'
const express = require('express')
const app = express()
const port = process.env.port || 3000

    //custom 404 page
    app.use ((req, res) =>{
        res.type('text/plain')
        res.status(404)
        res.send('404 - not found')
    })




// custom 500 page
app.use((err, req, res, next) => {
     console.error (err.message)
     res.type('text/plain')
     res.status (500)
     res.send('500 -server error')

})

app.listen(port, ()=> console.log(
    ' express stared on http://localhost:${port} ;' +
    'press ctrl-c to terminate.'))
    

 
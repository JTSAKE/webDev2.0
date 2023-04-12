const express = require('express');
const app = express()

// app.use((req, res) => {
//     console.log('New Request!')
//     res.send('Hi')
// })


app.get ('/', (req, res) => {
    console.log('Standard Request')
    res.send('<h1>Root Resource / Home Page</h1>')
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    console.log('Reddit Request')
    res.send(`<h1>Welcome to the ${subreddit} subreddit</h1>`)
})
app.get('/cats', (req, res) => {
    console.log('Cat Request')
    res.send('<h1>Cat Page</h1>')
})
app.get('/dogs', (req, res) => {
    console.log('Dog Request')
    res.send('<h1>Dog Page</h1>')
})
app.get('*', (req, res) => {
    console.log('Bad Request')
    res.send('<h1>Bad Request</h1>')
})
app.listen(3000, () =>{
    console.log('Listening on Port 3000')
})
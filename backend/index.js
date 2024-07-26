const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const port = 3000;

// app.get('/', (req, res) => {
//     res.send({ name: 'Ayush' })
// })

app.get('/', (req, res) => {
    res.send('Hiiiiiiiiiii')
})

app.get('/about', (req, res) => {
    res.json({ namee: 'Ayush' })
})

app.listen(port, () => {
    console.log('Server listening at 3000 - backend');
})

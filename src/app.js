const config = require('./config/config')

const express = require('express')

const app = express()

app.use(express.json())
app.use(require('./middleware/logs'))

app.use('/v1', require('./app/server'))

app.listen(config.PORT, () => {
    console.log(`Server is running in ${config.BASE_URL}`)
})
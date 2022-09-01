const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.static("theme")) //use this to send all css




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})
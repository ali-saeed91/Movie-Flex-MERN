const express = require('express')
const app = express()
const port = 8081
const cors = require('cors')
const route = require('./route')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// app.use(cors("http://localhost:3000"))

// BACKEND SERVER DOCUMENTATION
// IP = "127.0.0.1" (http://localhost)
// PORT = "8081"
// DataFormat = {"movieName":"", "movieRating":"", "userName":""}
// ENDPOINT for Data Manupilation: "http://localhost:8081/api/v1/movieData"

app.get("/", (req, res) => {
    res.send("Welcome to Movie Flex Server API");
});




app.use('/api/v1/movieData', route)

app.listen(port, () => {
    console.log("App is running on the port", port)
})
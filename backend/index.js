const express = require("express")
// import cors from "cors"
const { port } =  require("./constants.js")
const coinRoutes = require("./routes/coins.js")
const voteRoutes = require("./routes/votes.js")

const app = express()

app.use(express.json())

//routes
app.use('/coins',coinRoutes)
app.use('/votes',voteRoutes)

app.listen( port, () => console.log(`Node server running on port ${port}`)  )
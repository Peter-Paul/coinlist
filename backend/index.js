const express = require("express")
const cors = require("cors")
const cookieParser=require("cookie-parser")
const { port } =  require("./constants.js")
const coinRoutes = require("./routes/coins.js")
const voteRoutes = require("./routes/votes.js")
const bannerRoutes = require("./routes/banners.js")
const subscriptionRoutes = require("./routes/subscription.js")

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors())
// app.use(cors({
//     // origin:["http://localhost:3000","http://localhost:8080"],
//     origin:["*"],
//     credentials:true,
//     methods:['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
//     exposedHeaders:['Content-Length','Content-Type','Set-Cookie','Origin','Access-Control-Allow-Credentials','Access-Control-Allow-Origin' ]
// }))

//routes
app.get('/health_check', (_req, res) => {
    res.statusCode = 200;
    return res.json({ status: 200 });
  });
app.use('/backend/',coinRoutes)
app.use('/backend/',voteRoutes)
app.use('/backend/',bannerRoutes)
app.use('/backend/',subscriptionRoutes)

app.listen( port, () => console.log(`Node server running on port ${port}`)  )
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routs/foodRout.js"
import userRouter from "./routs/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routs/cartRoute.js"
import orderRouter from "./routs/orderRoute.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("APT Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://admin:12123422123@cluster0.kofqwmo.mongodb.net/?
import express from "express"
import routes from "./routes/index.js"
import connectionDB from "./config/connectionMongo.js"
import cors from "cors"

const connectionDataBase = await connectionDB()

connectionDataBase.once("open", () => {
    console.log("Connected on DataBase!")
})

connectionDataBase.on("error", () => {
    console.log("Failed to connect on DataBase!!!")
})

const app = express()
app.use(cors({origin: "*"}))
routes(app)

export default app;
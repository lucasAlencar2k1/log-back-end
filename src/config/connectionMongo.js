import mongoose from "mongoose"

async function connectionDB() {
    mongoose.connect("mongodb+srv://mongo-test:mongo230@cluster0.tdjl80e.mongodb.net/Regs?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection
}

export default connectionDB;
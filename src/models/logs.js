import mongoose from "mongoose"

const logsSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    email: { type: String },
    password: { type: String }
}, { versionKey: false })

const logs = mongoose.model("logs", logsSchema)

export default logs;
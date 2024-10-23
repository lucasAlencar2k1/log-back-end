import logs from "../models/logs.js";

class LogsController {
    static async searchLogs(req, res) {
        try {
            const logList = await logs.find({})
            res.status(200).json(logList)
        } catch(error) {
            res.status(500).json("Failed to search log List!")
        }
    }

    static async createLog(req, res) {
        try {
            const body = req.body
            const newLog = await logs.create(body)
            res.status(201).json(newLog)
        } catch(error) {
            res.status(500).json("Failed to create register!!!")
        }
    }

    static async deleteLog(req, res) {
        try {
            const { id } = req.params
            const logToRemove = await logs.findByIdAndDelete(id)
            res.status(200).json("Log Deleted!")
        } catch(error) {
            res.status(500).json("Failed to delete log!!!")
        }
    }
}

export default LogsController;
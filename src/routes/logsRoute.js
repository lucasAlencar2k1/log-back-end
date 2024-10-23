import LogsController from "../controllers/logsController.js";
import Router from "express"

const route = Router()

route.get("/register", LogsController.searchLogs)
route.post("/register", LogsController.createLog)
route.delete("/register/:id", LogsController.deleteLog)

export default route;

import express from "express"
import logs from "./logsRoute.js"

function routes(app) {
    app.route("/").get((req, res) => res.status(200).send("Mongo login!"))
    app.use(express.json(), logs)
}

export default routes;
import express, { Application, json, Request, Response } from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import logger from './utils/logger'
import socket from "./socket";
import { setupMongoDb } from "./models/chat-repository";
import chatRouter from './routers/chat-router'

const app: Application = express()

app.use(cors())
app.use(json())

const mongoUrl: string = process.env.MONGO_URL || 'mongodb://localhost:27017/chat';
const port: number = parseInt(process.env.SERVER_PORT || "3001");
const host = "localhost";
const corsOrigin = "http://localhost:3000";

const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: corsOrigin,
        credentials: true
    }
})
app.use("/chat", chatRouter)

app.get("/", (_, res) => res.send("Server is upp!"))

httpServer.listen(port, host, () => {
    setupMongoDb(mongoUrl);
    logger.info(`http://${host}:${port}`);
    socket({io})
});
  
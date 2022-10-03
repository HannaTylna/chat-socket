import express, { Request, Response } from "express";
import { saveChat } from "../services/chat-service";

const ChatRouter = express.Router();

ChatRouter.post("/", async (req: Request, res: Response) => {
    try {
        res.send(await saveChat(req.body));
    } catch (err) {
        res.sendStatus(400)
    }
});



export default ChatRouter;
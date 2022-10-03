import { Server, Socket } from "socket.io"
import logger from "./utils/logger"

function socket({ io }: { io: Server }) {
    logger.info(`Sockets enable`)
    io.on("connection", (socket: Socket) => {
        logger.info(`User connected ${socket.id}`)
        socket.on(
            "send message",
            ({  message, username }) => {
              const date = new Date();
      
              socket.emit("message", {
                message,
                username,
                time: `${date.getHours()}:${date.getMinutes()}`,
              });
            }
          );
      
    })
}

export default socket
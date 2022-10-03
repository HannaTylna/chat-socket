//import ChatItem from "@chat-app/shared"
import { model, Schema, connect } from "mongoose";

interface ChatItem {
    _id?: string;
    text: string;
    timeStamp: Date;
}
const ChatSchema = new Schema({
    text: String,
    timeStamp: Date
})

const ChatModel = model<ChatItem>("ChatItem", ChatSchema);

export const setupMongoDb = async (url: string) => {
    await connect(url)
}

export const saveChatItem = async (chatItem: ChatItem): Promise<void> => {
    const newModel = new ChatModel(chatItem);
    newModel.save()
}
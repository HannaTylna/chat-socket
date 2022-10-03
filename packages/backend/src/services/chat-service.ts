import { saveChatItem } from "../models/chat-repository";

interface ChatItem {
    _id?: string;
    text: string;
    timeStamp: Date;
}

export const saveChat = async (chatItem: ChatItem) => {
    if (!chatItem.text || chatItem.text == "") {
        throw new Error("You need to write something!")
    }
    chatItem.timeStamp = new Date();
    await saveChatItem(chatItem);
}
import Message from "./Message";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Messages() {
  const activeContact = useSelector((state: RootState) => state.contacts.activeContact);
  const messages = useSelector((state: RootState) => state.messages.messages).filter((_) => {
    return _.chatId === activeContact?.chatID;
  });

  const messagesList = messages.map((message, i) => {
    return (
      <Message
        value={message.value}
        messageDirection={message.messageDirection}
        key={i}
        chatId={message.chatId}
        receiptId={message.receiptId}
      />
    );
  });
  return <div className="messages">{messagesList}</div>;
}

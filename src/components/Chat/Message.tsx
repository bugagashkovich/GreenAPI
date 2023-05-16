import { IMessage, MessageDirection } from "../../interface/message";

export default function Message(message: IMessage) {
  return (
    <div className={message.messageDirection === MessageDirection.INPUT ? "message inputMessage" : "message outputMessage"}>
      {message.value}
    </div>
  );
}

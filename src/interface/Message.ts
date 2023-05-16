export interface IMessage {
  chatId: string;
  value: string;
  messageDirection: MessageDirection;
  receiptId: number;
}

export enum MessageDirection {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

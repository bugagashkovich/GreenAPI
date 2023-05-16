import { Dispatch, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMessage, MessageDirection } from "../../interface/Message";
import { deleteNotificationInstanse, getInstanse, sendInstanse } from "../../utils/API";
import { Axios, AxiosError, AxiosResponse } from "axios";

export interface MessagesStore {
  messages: IMessage[];
  chatInput: string;
}

const initialState: MessagesStore = {
  messages: [],
  chatInput: "",
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setChatInput: (state, action: PayloadAction<string>) => {
      state.chatInput = action.payload;
    },

    addMsg: (state, action: PayloadAction<IMessage>) => {
      if (action.payload.receiptId === -1) {
        state.messages.push(action.payload);
        if (action.payload.messageDirection === MessageDirection.OUTPUT) state.chatInput = "";
      } else {
        let st = current(state.messages);
        let _ = st.find((msg) => {
          return msg.receiptId === action.payload.receiptId;
        });
        if (_) return;
        state.messages.push(action.payload);
      }
    },
  },
});

export const sendMsgAsync = (chatId: string, message: string) => async (dispatch: Dispatch) => {
  try {
    let res = await sendInstanse.post("/", { chatId, message });
    let newMsg: IMessage = {
      chatId: chatId,
      value: message,
      messageDirection: MessageDirection.OUTPUT,
      receiptId: -1,
    };
    console.log("DATA", res.data);
    dispatch(addMsg(newMsg));
  } catch (error: any | AxiosError) {
    const err = error as AxiosError;
    console.log(err.response?.data);
  }
};

export const getMsgAsync = () => async (dispatch: Dispatch) => {
  try {
    let res: AxiosResponse<IGetMSG> = await getInstanse.get("");
    if (!res.data) return;
    let newMsg: IMessage = {
      chatId: res.data.body.senderData.chatId,
      value: res.data.body.messageData.textMessageData.textMessage,
      messageDirection: MessageDirection.INPUT,
      receiptId: res.data.receiptId,
    };
    console.log({ newMsg });
    dispatch(addMsg(newMsg));
    await deleteNotificationInstanse.delete(`${res.data.receiptId}`);
  } catch (error: any | AxiosError) {
    const err = error as AxiosError;
    console.log(err);
  }
};

// Action creators are generated for each case reducer function
export const { setChatInput, addMsg } = messagesSlice.actions;

export default messagesSlice.reducer;

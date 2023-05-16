import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { getMsgAsync } from "../../store/reducers/messagesReducer";
import { useAppDispatch } from "../../store/hooks";
import { RootState } from "../../store/store";

export default function Chat() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const asyncDispatch = useAppDispatch();
  let interval: number;
  useEffect(() => {
    if (isAuth) {
      interval && clearInterval(interval);
      interval = setInterval(() => {
        asyncDispatch(getMsgAsync());
      }, 200);
    }
  }, [isAuth]);

  return (
    <div className="chat">
      <Messages />
      <ChatInput />
    </div>
  );
}

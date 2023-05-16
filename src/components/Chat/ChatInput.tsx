import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { ChangeEvent, FormEvent } from "react";
import { setChatInput, sendMsgAsync } from "../../store/reducers/messagesReducer";
import { useAppDispatch } from "../../store/hooks";
export default function ChatInput() {
  const activeContact = useSelector((state: RootState) => state.contacts.activeContact);

  const input = useSelector((state: RootState) => state.messages.chatInput);
  const dispatch = useDispatch();
  const asyncDispatch = useAppDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setChatInput(e.target.value));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeContact === null) return;
    asyncDispatch(sendMsgAsync(activeContact.chatID, input));
  };
  return (
    <form className="chatInput" onSubmit={submitHandler}>
      <input placeholder="Let's chat..." value={input} onChange={changeHandler} /> <button type="submit">Send</button>
    </form>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { setActiveContact } from "../../store/reducers/contactsReducer";
import { RootState } from "../../store/store";

export default function ContactCard(contact: IContact) {
  const dispatch = useDispatch();
  const activeContact = useSelector((state: RootState) => state.contacts.activeContact);
  const submitHandler = (val: string) => {
    dispatch(setActiveContact(val));
  };
  return (
    <div
      className={activeContact?.chatID === contact.chatID ? "contact active" : "contact inactive"}
      onClick={() => {
        submitHandler(contact.phone);
      }}
    >
      <img src="/vite.svg" />
      <div className="data">
        <p>{contact.phone}</p>
        <p>{contact.lastMsg}</p>
      </div>
    </div>
  );
}

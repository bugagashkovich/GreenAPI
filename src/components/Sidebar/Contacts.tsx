import ContactCard from "./ContactCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Contacts() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const contactList = contacts.map((contact, i) => {
    return <ContactCard phone={contact.phone} key={i} chatID={contact.chatID} />;
  });

  return <div>{isAuth && contactList}</div>;
}

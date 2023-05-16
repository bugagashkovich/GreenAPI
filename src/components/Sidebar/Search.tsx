import serachIcon from "../../assets/icons8-search-24.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { ChangeEvent, FormEvent } from "react";
import { addContact, findHandler } from "../../store/reducers/contactsReducer";

export default function Search() {
  const value = useSelector((state: RootState) => state.contacts.findChatInput);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(findHandler(e.target.value));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addContact(value));
  };

  if (isAuth)
    return (
      <div className="searchBar">
        <form onSubmit={submitHandler}>
          <img src={serachIcon} />
          <input placeholder="Start new chat" value={value} onChange={changeHandler} />
        </form>
        <img />
      </div>
    );
}

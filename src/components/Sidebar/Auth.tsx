import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { ChangeEvent, FormEvent } from "react";
import { apiTokenInstanseChange, auth, idInstanseChange } from "../../store/reducers/authReducer";

export default function Auth() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const idInstance = useSelector((state: RootState) => state.auth.idInstance);
  const apiTokenInstance = useSelector((state: RootState) => state.auth.apiTokenInstance);
  const dispatch = useDispatch();

  const idInstanceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(idInstanseChange(e.target.value));
  };

  const apiTokenInstanceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(apiTokenInstanseChange(e.target.value));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(auth());
  };

  if (!isAuth) {
    return (
      <div className="auth">
        <form onSubmit={submitHandler}>
          <p>Авторизизация</p>
          <input placeholder="idInstance" value={idInstance} onChange={idInstanceHandler} />
          <input placeholder="apiTokenInstance" value={apiTokenInstance} onChange={apiTokenInstanceHandler} />
          <button type="submit">Войти</button>
        </form>
        <img />
      </div>
    );
  }
}

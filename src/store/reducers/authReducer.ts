import { createSlice, Dispatch } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createDeleteNotificationInstanse, createGetInstanse, createSendInstanse, setAccSettings } from "../../utils/API";

export interface AuthState {
  idInstance: string;
  apiTokenInstance: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  idInstance: "",
  apiTokenInstance: "",
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    idInstanseChange: (state, action: PayloadAction<string>) => {
      state.idInstance = action.payload;
    },
    apiTokenInstanseChange: (state, action: PayloadAction<string>) => {
      state.apiTokenInstance = action.payload;
    },
    auth: (state) => {
      createGetInstanse(state.idInstance, state.apiTokenInstance);
      createSendInstanse(state.idInstance, state.apiTokenInstance);
      createDeleteNotificationInstanse(state.idInstance, state.apiTokenInstance);
      setAccSettings(state.idInstance, state.apiTokenInstance);
      state.isAuth = true;
    },
  },
});

// export const authAsync = () => async (dispatch: Dispatch) => {
//   try {
//     console.log();

//     // let res = await setAccSettings()
//     // let res: AxiosResponse<IGetMSG> = await getInstanse.get("/");
//     // console.log("DATA", res.data);

//     dispatch(auth());
//   } catch (error: any | AxiosError) {
//     const err = error as AxiosError;
//     console.log(err.response?.data);
//   }
// };

// Action creators are generated for each case reducer function
export const { idInstanseChange, apiTokenInstanseChange, auth } = authSlice.actions;

export default authSlice.reducer;

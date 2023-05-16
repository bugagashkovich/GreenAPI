import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactsReducer";
import messagesReducer from "./reducers/messagesReducer";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    messages: messagesReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

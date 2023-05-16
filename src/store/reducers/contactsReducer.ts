import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  contacts: IContact[];
  findChatInput: string;
  activeContact: IContact | null;
}

const initialState: CounterState = {
  contacts: [],
  findChatInput: "",
  activeContact: null,
};

export const counterSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    findHandler: (state, action: PayloadAction<string>) => {
      state.findChatInput = action.payload;
    },

    addContact: (state, action: PayloadAction<string>) => {
      const newContact: IContact = {
        phone: action.payload,
        chatID: `${action.payload}@c.us`,
      };
      state.contacts.push(newContact);
      state.findChatInput = "";
    },

    setActiveContact: (state, action: PayloadAction<string>) => {
      let contacts = current(state.contacts);
      let active = contacts.find((contact) => {
        console.log(contact, action.payload);

        return contact.phone === action.payload;
      });

      if (active) {
        state.activeContact = active;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { findHandler, addContact, setActiveContact } = counterSlice.actions;

export default counterSlice.reducer;

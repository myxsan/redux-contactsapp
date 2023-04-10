import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();
const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactAdapter.addOne,
    addContacts: contactAdapter.addMany,
  },
});

export const { addContact, addContacts } = contactSlice.actions;
export default contactSlice.reducer;

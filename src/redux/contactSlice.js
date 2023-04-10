import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelectors = contactAdapter.getSelectors(
  (state) => state.contacts
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactAdapter.addOne,
    addContacts: contactAdapter.addMany,
    deleteContact: contactAdapter.removeOne,
    removeAllContacts: contactAdapter.removeAll,
  },
});

export const { addContact, addContacts, deleteContact, removeAllContacts } =
  contactSlice.actions;
export default contactSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addPhoneNumber, removePhoneNumber } from './operation';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const phoneContacts = createSlice({
  name: "contacts", 
  initialState,
  extraReducers: {
    [fetchContacts.pending] (store)  {
      store.isLoading = true;
    },
    [fetchContacts.fulfilled] (store, {payload})  {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected] (store, {payload})  {
      store.isLoading = false;
      store.error = payload;
    },
    [addPhoneNumber.pending] (store)  {
      store.isLoading = true;
    },
    [addPhoneNumber.fulfilled] (store, {payload})  {
      store.isLoading = false;
      store.items.push(payload.items);
    },
    [addPhoneNumber.rejected] (store, {payload})  {
      store.isLoading = false;
      store.error = payload;
    },
    [removePhoneNumber.pending] (store)  {
      store.isLoading = true;
    },
    [removePhoneNumber.fulfilled] (store, {payload})  {
      store.isLoading = false;
      store.items.filter(item => item.id !== payload);
    },
    [removePhoneNumber.rejected] (store, {payload})  {
      store.isLoading = false;
      store.error = payload;
    },
  }
}) 

export default phoneContacts.reducer;

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact(state, { payload }) {
//       state.push(payload);
//     },
//     removeContact(state, { payload }) {
//       return state.filter(item => item.id !== payload);
//     },
//   },
// });

// export const { addContact, removeContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer

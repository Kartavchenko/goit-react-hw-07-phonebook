import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operation';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const phoneContacts = createSlice({
  name: "contacts", 
  initialState,
  extraReducers: {
    [fetchContacts.pending] (store)   {
      store.isLoading = true;
    },
    [fetchContacts.fulfilled] (store, {payload}) {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected] (store, {payload})  {
      store.isLoading = false;
      store.error = payload;
    },
    [addContact.pending](store) {
      store.isLoading = true;
    },
     [addContact.fulfilled](store, action) {
      store.items.push(action.payload)
    },
    [addContact.rejected] (store, {payload})  {
      store.isLoading = false;
      store.error = payload;
    },
    [removeContact.pending] (store)  {
      store.isLoading = true;
    },
    [removeContact.fulfilled] (store, {payload})  {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected] (store, {payload})  {
      store.isLoading = false;
      store.error = payload;
    },
  }
}) 

export const reduserContacts = phoneContacts.reducer


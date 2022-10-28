import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addPhoneNumber, removePhoneNumber } from './operation';

// const initialState = {
//     items: [],
//     isLoading: false,
//     error: null,
// }

// const phoneContacts = createSlice({
//   name: "contacts",
//   initialState: {
//     items: []
//   },
//   extraReducers: {
//     [addPhoneNumber.pending](store) {
//       console.log("store", store)
//     },
//     [addPhoneNumber.fulfilled](store, action) {
//       console.log("fulfield", action.payload)
//       store.items.push(action.payload)
//     },
//     [addPhoneNumber.rejected] (store, {payload})  {
//       store.isLoading = false;
//       store.error = payload;
//     },
//     [fetchContacts.fulfilled](store, action) {
//       console.log("action", action)
//       store.items = action.payload
//     },
//     [fetchContacts.rejected] (store, {payload})  {
//       store.isLoading = false;
//       store.error = payload;
//     },
//     [removePhoneNumber.pending] (store)  {
//       store.isLoading = true;
//     },
//     [removePhoneNumber.fulfilled] (store, {payload})  {
//       store.isLoading = false;
//       store.items.filter(item => item.id !== payload);
//     },
//     [removePhoneNumber.rejected] (store, {payload})  {
//       store.isLoading = false;
//       store.error = payload;
//     },
//   }
// })


const phoneContacts = createSlice({
  name: "contacts", 
  initialState: {
    items: [],
    isLoading: false,
    error: null,
},
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
    [addPhoneNumber.pending](store) {
      console.log("pending", store)
      store.isLoading = true;
    },
     [addPhoneNumber.fulfilled](store, action) {
      console.log("fulfield", action.payload)
      store.items.push(action.payload)
    },
    [addPhoneNumber.rejected] (store, {payload})  {
      store.isLoading = false;
      store.error = payload;
    },
    [removePhoneNumber.pending] (store)  {
      store.isLoading = true;
      console.log("pending")
    },
    [removePhoneNumber.fulfilled] (store, {payload})  {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removePhoneNumber.rejected] (store, {payload})  {
      store.isLoading = false;
      store.error = payload;
    },
  }
}) 

export const reduser = phoneContacts.reducer

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

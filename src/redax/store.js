import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlise";
import phoneContacts from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: phoneContacts,
    search: filterReducer,
  }
});
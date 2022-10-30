import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlise";
import { reduserContacts } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: reduserContacts,
    search: filterReducer,
  }
});
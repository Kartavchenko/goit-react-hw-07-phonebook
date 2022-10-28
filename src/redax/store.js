import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlise";
import {reduser} from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: reduser,
    search: filterReducer,
  }
});
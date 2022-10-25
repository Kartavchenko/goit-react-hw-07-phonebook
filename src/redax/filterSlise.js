import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
        filterContacts: (_, {payload}) => payload
    }
})

export const { filterContacts } = filterSlice.actions

export const filterReducer = filterSlice.reducer
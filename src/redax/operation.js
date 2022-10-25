import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFetch, addToPhonebook } from "./shared";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async (_, thunkApi) => {
        try {
            const data = await getFetch()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    })

export const addPhoneNumber = createAsyncThunk(
    "conacts/add",
    async (id, { rejectWithValue }) => {
        try {
            const data = await addToPhonebook()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
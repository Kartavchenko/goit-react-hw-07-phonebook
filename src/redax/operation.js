import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactApi  from "./shared";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async (_, thunkApi) => {
        try {
            const data = await contactApi.getFetch()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    })

export const addPhoneNumber = createAsyncThunk(
    "contacts/add",
    async (item, { rejectWithValue }) => {
        try {
             await contactApi.addToPhonebook(item)
            return item
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const removePhoneNumber = createAsyncThunk(
    "contacts/add",
    async (id, { rejectWithValue }) => {
        try {
            await contactApi.removePhoneNumber(id)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
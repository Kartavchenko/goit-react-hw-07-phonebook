import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactApi from "./shared";

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

export const addContact = createAsyncThunk(
    "contacts/add",
    async (item, { rejectWithValue }) => {
        try {
            const data  = await contactApi.addToPhonebook(item)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/delete",
    async (id, { rejectWithValue }) => {
        try {
            await contactApi.removePhoneNumber(id)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
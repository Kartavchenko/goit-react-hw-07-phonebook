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

export const addPhoneNumber = createAsyncThunk(
    "contacts/add",
    async (item, { rejectWithValue }) => {
        try {
            console.log("item", item)
            const data  = await contactApi.addToPhonebook(item)
            console.log("data", data)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const removePhoneNumber = createAsyncThunk(
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
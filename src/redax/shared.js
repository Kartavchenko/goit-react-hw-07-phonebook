import axios from "axios";

axios.defaults.baseURL = "https://635840b3c26aac906f3f5356.mockapi.io"

export const getFetch = async () => {
    const {data} = await axios.get(`/contacts`);
    return data;
}

export const addToPhonebook = async(item) => {
    const {data} = await axios.post("/contacts", item);
    return data;
}

export const removePhoneNumber = async(id) => {
    const {data} = await axios.delete(`/contacts/${id}`);
    return data;
}
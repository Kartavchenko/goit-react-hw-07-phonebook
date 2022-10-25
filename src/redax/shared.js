const baseUrl = "https://635840b3c26aac906f3f5356.mockapi.io"

export const getFetch = async () => {
    const data = await fetch(`${baseUrl}/contacts`);
    const result = await data.json();
    return result;
}

export const addToPhonebook = async(data) => {
    const add = await getFetch.post("/", data);
    const result = await add.json();
    return result;
}
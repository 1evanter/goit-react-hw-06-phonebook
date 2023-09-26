import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: 'contact',
    initialState: [],
    reducers: {
        addContact(state, action) {},
        deleteContact (state, action) {}
    }
})

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
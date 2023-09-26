import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contact',
    initialState: [],
    reducers: {
        addContact(state, action) {

        },
        deleteContact (state, action) {}
    }
})

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'John Doe'},
    { id: '1', name: 'Nancy Rey'},
    { id: '2', name: 'James Bond'}
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
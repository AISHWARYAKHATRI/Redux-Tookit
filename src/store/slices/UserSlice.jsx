import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions/index";

const UserSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
             state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },
        // deleteUsers() {
        //     return [];
        // }
    },
    // extraReducer is a micro reducer which is already defined in one slice and you want that reducer in multiple slices
    extraReducers(builder) {
        builder.addCase(deleteUsers, () => {
            return [];
        })
    }
})
// console.log(UserSlice.actions);
export default UserSlice.reducer;
export const { addUser, removeUser } = UserSlice.actions;

// export const { addUser, removeUser, deleteUsers } = UserSlice.actions;
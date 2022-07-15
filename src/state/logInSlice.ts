import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false
}

const logInSlice = createSlice({
    name: 'logged',
    initialState,
    reducers: {
        logInReducer(state, action) {
            const stateLoggedIn = { ...state, user: action.payload }
            return stateLoggedIn
        },
        logOutReducer() {
            return { user: false }
        }
    }
})

export default logInSlice.reducer
export const { logInReducer, logOutReducer } = logInSlice.actions

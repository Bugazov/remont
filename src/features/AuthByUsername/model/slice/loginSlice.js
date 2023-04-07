import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState = {
    isLoading: false,
    username: '',
    password: '',
    error:undefined
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});


export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

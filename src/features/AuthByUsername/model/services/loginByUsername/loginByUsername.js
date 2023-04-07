import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entinies/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';



export const loginByUsername = createAsyncThunk(
    'login/loginByUsername',
    async ({login,password}, thunkApi) => {
        const {extra,dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await axios.post('http://localhost:8000/login', {login,password});
            console.log(response)

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate("/")
            return response.data;
        } catch (e) {
        
            return rejectWithValue(`${e}`);
        }
    },
);

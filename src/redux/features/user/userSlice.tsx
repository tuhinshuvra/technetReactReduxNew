


import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
    user: {
        email: string | null;
    },
    isLoading: boolean,
    isError: boolean,
    error: boolean,
}

const initialState: IUserState = {
    user: {
        email: null,
    },
    isLoading: false,
    isError: false,
    error: false,
};

const userSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
});


export default userSlice.reducer;

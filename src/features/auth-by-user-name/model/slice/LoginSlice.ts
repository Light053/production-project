import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StateTypes } from '../types/StateTypes';


const initialState: StateTypes = {
    errors: '',
    isLoading: false,
    password: '',
    username:''
};

export const LoginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
        setUsername: (state:StateTypes, action: PayloadAction<StateTypes>) => {
            state.username = action.payload.username
        }
	}
})
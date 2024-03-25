import { createSlice } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {

};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {

	}
})

export const { actions: UserActions } = userSlice
export const { reducer: UserReducer } = userSlice
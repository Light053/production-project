export interface User {
	id: number,
	user_name: string
}

export interface UserSchema {
	authData?: User
}
export interface Login {
    email: string,
    password: string
}

export interface LoginResponse {
    message: string, userId: string, authToken: string, authTokenExpiry: number
}
interface useAuthReturnType {
    isAuthenticated: boolean,
    userId: string;
    clearAuthState(): void;
}

const useAuth = (): useAuthReturnType => {
    const userId = localStorage.userId;
    const clearAuthState = () => {
        localStorage.clear();
    }
    return { isAuthenticated: !!userId, userId, clearAuthState }
}

export default useAuth;
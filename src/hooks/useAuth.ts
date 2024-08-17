import forceLogout from "../utils/forceLogout";

interface useAuthReturnType {
    isAuthenticated: boolean,
    userId: string;
    clearAuthState(): void;
}

const useAuth = (): useAuthReturnType => {
    const userId = localStorage.userId;
    if (localStorage.authToken && localStorage.userId && localStorage.authTokenExpiry) {
        const currentTime = new Date().getTime();
        if (currentTime > localStorage.authTokenExpiry) forceLogout();
    }
    const clearAuthState = () => localStorage.clear();
    return { isAuthenticated: !!userId, userId, clearAuthState };
}

export default useAuth;
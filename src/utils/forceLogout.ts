const forceLogout = () => {
    localStorage.clear();
    window.location.pathname = '/'
}
export default forceLogout
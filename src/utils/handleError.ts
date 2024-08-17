import toast from "react-hot-toast";
import forceLogout from "./forceLogout";

const handleError = (error: any) => {
    switch (error.response.status) {
        case 500:
            toast.error(error.response.data.message || 'Unknown Error Occurred.');
            break;
        case 404:
            toast.error(error.response.data.message || 'Resource Not Found.');
            break;
        case 400:
            toast.error(error.response.data.message || 'Validation Error.');
            break;
        case 401:
            forceLogout();
            toast.error(error.response.data.message || 'Unauthorized Access.');
            break;
        default:
            toast.error('Unspecified Error Occurred.');
            break;
    }
}

export default handleError;
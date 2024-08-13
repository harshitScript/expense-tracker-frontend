import toast from "react-hot-toast";

const handleError = (error: any) => {
    toast.error(error.response.data.message || 'An error occurred.');
}

export default handleError;
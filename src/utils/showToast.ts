import { toast } from "react-toastify";

export const showToast = (message: string, type: 'success' | 'error') => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
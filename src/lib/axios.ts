import axios from "axios";
// import { useAuthStore } from "@/modules/auth/store/auth.store";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 20000, // 20s timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Attach Token)
// api.interceptors.request.use(
//   (config) => {
//     const token = useAuthStore.getState().token;
//     if (token) {
//       config.headers.Authorization = "Bearer " + token;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// // Response Interceptor (Handle Errors)
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // // 🔴 Axios timeout
//     // if (
//     //   error.code === "ECONNABORTED" ||
//     //   error.code === "ETIMEDOUT" ||
//     //   error.code === "ERR_NETWORK"
//     // ) {
//     //   toast.error(
//     //     "The server is not responding. Please check your connection or try again shortly.",
//     //   );
//     //   return Promise.reject(error);
//     // }

//     if (error.response) {
//       if (error.response.status === 401) {
//         useAuthStore.getState().logout(); // Auto logout on 401
//         window.location.href = "/login";
//       }
//     }

//     if (error.response.data.details && error.response.data.details.length > 0) {
//       if (error.response.data.details.includes("Duplicate data detected."))
//         toast.error(error.response.data.error);
//       else
//         error.response.data.details.forEach((detail: string) => {
//           if (detail !== "Duplicate data detected.") {
//             toast.error(detail);
//           }
//         });
//     } else {
//       toast.error(error.response.data.error);
//     }

//     return Promise.reject(error);
//   },
// );

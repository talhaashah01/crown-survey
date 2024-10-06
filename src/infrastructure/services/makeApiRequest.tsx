import { axiosInstance } from "../constants/APIConfig";
import { AxiosResponse, AxiosError } from "axios";
import { useShowToastContext } from "../contexts/toastContext";

interface ApiResponse<T> {
  responseBody?: T;
  responseStatus?: {
    code: number;
    isError: boolean;
    message: string;
  };
  responseError?: AxiosError;
}

const makeApiRequest = async (
  method: string = "get",
  endpoint: string,
  data?: any
) => {
  try {
    const response = await axiosInstance({
      method,
      url: endpoint,
      data,
    });
    const responseBody = response?.data?.responseBody;
    const responseStatus = response?.data?.responseStatus;
    return { responseBody, responseStatus };
  } catch (error) {
    const responseError = { message: error?.message };
    console.log(responseError)
    return { responseError };
  }
};

export default makeApiRequest;

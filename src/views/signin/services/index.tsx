import { NavigateFunction } from "react-router-dom";
import makeApiRequest from "../../../infrastructure/services/makeApiRequest";
import { FormData } from "../model";

const validateForm = (formData: FormData, setErrors: any) => {
  let isValid = true;
  const newErrors = {
    email: "",
    password: "",
  };

  // Validate email
  if (!formData.email) {
    newErrors.email = "Email is required";
    isValid = false;
  }

  // Validate password
  if (!formData.password) {
    newErrors.password = "Password is required";
    isValid = false;
  }

  setErrors(newErrors);

  return isValid;
};

export const handleSubmit = async (
  event: any,
  formData: FormData,
  setErrors: any,
  navigate: NavigateFunction,
  showToast: any
) => {
  event.preventDefault();
  // if (validateForm(formData, setErrors)) {
  //   const { responseBody, responseStatus, responseError } = await makeApiRequest(
  //     "post",
  //     "auth/login",
  //     formData
  //   );
  //   if (responseError || responseStatus?.isError) {
  //     showToast({
  //       visible: true,
  //       type: "error",
  //       title: "Error",
  //       message: responseBody?.error || responseStatus?.message || responseError?.message,
  //     });
  //   } 
  //   else {
  //     localStorage.setItem("auth", "true");
  //     localStorage.setItem("token", responseBody?.session?.accessToken);
  //     localStorage.setItem("userID", responseBody?.session?.userID);
  //     if (localStorage.getItem("token")) {
  //       navigate("/dashboard");
  //     }
  //     showToast({
  //       visible: true,
  //       type: "successful",
  //       title: "Successful",
  //       message: "Signed In",
  //     });
  //   }
  // }

  //Local No Pass
  localStorage.setItem("auth", "true");
  localStorage.setItem("token", "responseBody?.session?.accessToken");
  localStorage.setItem("userID", "responseBody?.session?.userID");
  if (localStorage.getItem("token")) {
    navigate("/dashboard");
  }
  showToast({
    visible: true,
    type: "successful",
    title: "Successful",
    message: "Signed In",
  });
};

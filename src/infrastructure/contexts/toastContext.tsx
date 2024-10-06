import React, { useContext, createContext, useState } from "react";

import Toast from "../../ui/Toast";

interface toastDataInterface {
  visible: boolean;
  title: string;
  type: string;
  message: string;
}

const toastDataInitial = {
  visible: false,
  title: "successful",
  type: "successful",
  message: "Message",
};

const ToastContext = createContext<toastDataInterface>(toastDataInitial);
const ShowToastContext = createContext<Function>(() => {});

const ToastContextProvider = ({ children }) => {
  const [toastData, setToastData] =
    useState<toastDataInterface>(toastDataInitial);

  const showToast = (value: toastDataInterface) => {
    setToastData(value);
    let timeoutId: any;
    timeoutId = setTimeout(() => {
      hideToast(value);
      clearTimeout(timeoutId);
    }, 3000);
  };

  const hideToast = (value: toastDataInterface) => {
    const duplicateToastData = { ...value };
    duplicateToastData.visible = false;
    setToastData(duplicateToastData);
  };

  return (
    <ToastContext.Provider value={toastData}>
      <ShowToastContext.Provider value={showToast}>
        <Toast
          visible={toastData?.visible}
          type={toastData?.type}
          message={toastData?.message}
          title={toastData?.title}
        />
        {children}
      </ShowToastContext.Provider>
    </ToastContext.Provider>
  );
};

const useToastDataContext = () => {
  return useContext(ToastContext);
};

const useShowToastContext = () => {
  return useContext(ShowToastContext);
};

export { useToastDataContext, useShowToastContext };
export default ToastContextProvider;

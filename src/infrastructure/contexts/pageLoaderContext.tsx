import React, { useContext, createContext, useState } from "react";

import PageLoader from "../../ui/PageLoader";

const PageLoaderContext = createContext<boolean>(false);
const ToggleLoaderContext = createContext<Function>(() => {});

const PageLoaderContextProvider = ({ children }) => {
  const [loaderState, setLoaderState] = useState<boolean>(false);

  const toggleLoaderState = (state: boolean) => {
    const duplicateState = state;
    setLoaderState(duplicateState);
  };

  return (
    <PageLoaderContext.Provider value={loaderState}>
      <ToggleLoaderContext.Provider value={toggleLoaderState}>
        <>
          {loaderState && <PageLoader />}
          {children}
        </>
      </ToggleLoaderContext.Provider>
    </PageLoaderContext.Provider>
  );
};

const useLoaderState = () => {
  return useContext(PageLoaderContext);
};

const useLoaderToggle = () => {
  return useContext(ToggleLoaderContext);
};

export { useLoaderState, useLoaderToggle };
export default PageLoaderContextProvider;

import React from "react";

const AuthCard = (props: any) => {
  return (
    <div className="w-full shadow-xl theme-white-bg rounded-lg sm:max-w-lg mx-auto">
      <div className="p-6 sm:p-8">{props?.children}</div>
    </div>
  );
};

export default AuthCard;

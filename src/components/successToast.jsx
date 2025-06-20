import React from "react";

const SuccessToast = ({
  title = "Success",
  message = "Signed up successfully! Redirecting in..."
}) => {
  return (
    <div className="flex flex-col bg-green-100 text-green-900 rounded-lg p-4 shadow-md w-fit max-w-md animate-fade-in">
      <p className="font-semibold">{title}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default SuccessToast;

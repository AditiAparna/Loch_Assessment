import React, { useState, useEffect } from "react";
import SuccessToast from "../components/successToast";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required.");
      return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email.");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail();

    if (isValid) {
      setShowToast(true);
      setCountdown(3);
    }
  };

  useEffect(() => {
    let timer;
    if (showToast && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      window.location.href = "https://app.loch.one/welcome";
    }
    return () => clearTimeout(timer);
  }, [showToast, countdown]);

  return (
    <div className="w-full md:w-[44.4%] flex items-center justify-center bg-white z-10 mt-8 md:mt-0">
      <div className="max-w-md px-4">
        <h3 className="font-normal text-[30px] md:text-[39px] text-left leading-[120%] text-[#B0B1B3] mb-4 md:mb-[35px] font-[Inter]">
          Sign up for <br className="hidden md:block" />
          exclusive access.
        </h3>

        <form onSubmit={handleSubmit} className="" noValidate>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value), setError("");
            }}
            onBlur={validateEmail}
            required
            className={`w-full px-4 py-2 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              error ? "focus:ring-red-500" : "focus:ring-black"
            } hover:shadow-sm hover:border-black`}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition my-4 md:my-[28px] cursor-pointer"
          >
            Get started
          </button>
        </form>

        <p className="text-base font-medium text-gray-900 md:mb-0 mb-4">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
      {showToast && (
        <div className="absolute md:top-8 right-8 top-[10px] ml-[10px] mr-[10px] md:ml-0 md:mr-0">
          <SuccessToast
            message={`Signed up successfully! Redirecting in ${countdown} seconds...`}
          />
        </div>
      )}
    </div>
  );
};

export default LoginScreen;

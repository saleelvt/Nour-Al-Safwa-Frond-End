import React, { useState } from "react";
import { useFormik } from "formik";
import { ValidationLogin } from "../../../validation/admin/adminLogin";
import { LoginInterfaces } from "../../../interfaces/admin/login";


export const AdminLogin = React.memo(() => {
  const initialValues: LoginInterfaces = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);
//   const [typingEffectText, setTypingEffectText] = useState("");
 

  const formik = useFormik<LoginInterfaces>({
    initialValues,
    validationSchema: ValidationLogin,
    onSubmit: async (values) => {
      try {
        console.log(values, "before going to salon home page ");
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-col items-center p-6 w-full max-w-lg shadow-lg  border border-gray-300 rounded-lg bg-white transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-serif mb-6 text-center text-gray-800 animate-pulse">
          LogIn Account
        </h2>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...formik.getFieldProps("password")}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-700 focus:outline-none transition duration-300"
            />
            <span
              className="absolute inset-y-0 mt-8 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223a11.055 11.055 0 00-1.66 3.656C2.453 12.11 4.825 16.5 12 16.5c2.245 0 4.09-.5 5.5-1.217M21 21l-1.682-1.682M3.98 8.223L21 21M9.878 9.878a3 3 0 014.244 4.244"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.432 5 12 5c3.87 0 7.07 2.43 8.542 5.458A10.97 10.97 0 0112 19.5a10.97 10.97 0 01-9.542-7.5z"
                  />
                </svg>
              )}
            </span>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full p-3 rounded-lg mt-4 bg-orange-400 text-white font-semibold hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

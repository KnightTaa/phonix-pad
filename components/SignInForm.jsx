"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import IconBox from "@/components/iconBox";
import Link from "next/link";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import API from "../services/api";
import { toast } from 'react-toastify';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const passwordType = showPassword ? "text" : "password";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let postdata = {
      "email": formData.email,
      "password": formData.password,
    };
    try {
      const response = await API.post('/login', postdata);
      localStorage.setItem('access_token', response.data.access_token);
      toast.success('login successfully!');
      router.push('/uploads');
    } catch (error) {
      console.error('Error posting data:', error);
      toast.error('Error submitting form');
    }
  };
  return (
    <div className="px-2 sm:px-72 py-10 font-arial">
      <form className="border border-gray-950 px-5 sm:px-16 py-10 bg-black" onSubmit={handleSubmit}>
        <h1
          className={`uppercase text-xl text-start sm:text-4xl font-semibold mb-10 text-white`}
        >
          Sign In
        </h1>
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-lg border-0 py-1.5 px-2 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="flex items-center gap-2">
                  <BiSolidShow
                    size={20}
                    className={`${!showPassword ? "text-white" : "hidden"}`}
                    onClick={togglePassword}
                  />
                  <span
                    className={`${
                      !showPassword
                        ? "text-sm font-medium leading-6 text-white"
                        : "hidden"
                    }`}
                  >
                    Show
                  </span>
                  <BiSolidHide
                    size={20}
                    className={`${showPassword ? "text-white" : "hidden"}`}
                    onClick={togglePassword}
                  />
                  <span
                    className={`${
                      showPassword
                        ? "text-sm font-medium leading-6 text-white"
                        : "hidden"
                    }`}
                  >
                    Hide
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type={passwordType}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  autoComplete="+94"
                  className="block w-full rounded-lg border-0 py-1.5 px-2 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <fieldset className="-mt-4">
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 checked:bg-black checked:text-white"
                />
              </div>
              <div className="text-sm leading-6">
                <p className="font-normal text-white">Remember me </p>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="text-sm leading-6">
            <p className="font-normal text-white">
              By continuing, you agree to the{" "}
              <span className="font-medium underline">Terms of use</span> and{" "}
              <span className="font-medium underline">Privacy Policy</span>
            </p>
          </div>
          <button
            type="submit"
            className="w-[80%] text-sm font-semibold leading-6 bg-primary px-6 py-2 rounded-full text-white hover:bg-primary-hover transition-all duration-200"
          >
            Log in
          </button>
          <Link
            href="/sign-in"
            className="underline text-sm text-white/80 font-semibold"
          >
            Forget your password?
          </Link>
          <p className="text-xs sm:text-sm text-white/80">
            Don't have an account?{" "}
            <Link
              href="/sign-in"
              className="underline text-white font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
        {/* <span className="flex items-center my-5">
          <span className="h-px flex-1 bg-gray-500"></span>
          <span className="shrink-0 px-6 font-bold text-white">
            Or continue with
          </span>
          <span className="h-px flex-1 bg-gray-500"></span>
        </span>

        <div className="flex items-center justify-center gap-8">
          <IconBox icon={"facebook"} className="w-9 h-auto cursor-pointer" />
          <IconBox icon={"applew"} className="w-8 h-auto cursor-pointer" />
          <IconBox icon={"google"} className="w-8 h-auto cursor-pointer" />
          <IconBox icon={"xwhite"} className="w-7 h-auto cursor-pointer" />
        </div> */}
      </form>
    </div>
  );
};

export default SignInForm;

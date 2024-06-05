import IconBox from "@/components/iconBox";
import Link from "next/link";
import React from "react";
import { BiSolidHide } from "react-icons/bi";

const Login = () => {
  return (
    <div className="px-2 sm:px-72 py-10">
      <form className="border border-gray-950 px-5 sm:px-16 py-10">
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-xl border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-500"
                >
                  Password
                </label>
                <div className="flex items-center gap-2">
                  <BiSolidHide size={15} className="text-gray-500" />
                  <p className="block text-sm font-medium leading-6 text-gray-500">
                    Hide
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="+94"
                  className="block w-full rounded-xl border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
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
                <p className="font-normal">Remember me </p>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="text-sm leading-6">
            <p className="font-normal">
              By continuing, you agree to the{" "}
              <span className="font-medium underline">Terms of use</span> and{" "}
              <span className="font-medium underline">Privacy Policy</span>
            </p>
          </div>
          <button
            type="button"
            className="w-[80%] text-sm font-semibold leading-6 bg-primary px-6 py-2 rounded-full text-white hover:bg-primary-hover transition-all duration-200"
          >
            Log in
          </button>
          <Link
            href="/sign-in"
            className="underline text-sm text-gray-800 font-semibold"
          >
            Forget your password?
          </Link>
          <p className="text-xs sm:text-sm text-gray-700">
            Don't have an account?{" "}
            <Link
              href="/sign-in"
              className="underline text-gray-800 font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
        <span className="flex items-center my-5">
          <span className="h-px flex-1 bg-gray-500"></span>
          <span className="shrink-0 px-6 font-bold">Or continue with</span>
          <span className="h-px flex-1 bg-gray-500"></span>
        </span>

        <div className="flex items-center justify-center gap-8">
            <IconBox icon={"facebook"} className='w-9 h-auto cursor-pointer'/>
            <IconBox icon={"apple"} className='w-9 h-auto cursor-pointer'/>
            <IconBox icon={"google"} className='w-8 h-auto cursor-pointer'/>
            <IconBox icon={"twitter"} className='w-7 h-auto cursor-pointer'/>
        </div>
      </form>
    </div>
  );
};

export default Login;

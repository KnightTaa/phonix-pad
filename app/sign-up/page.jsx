import Link from "next/link";
import React from "react";
import { BiSolidHide } from "react-icons/bi";

const SignUp = () => {
  return (
    <div className="px-2 sm:px-72 py-10">
      <form className="border border-gray-950 px-5 sm:px-16 py-10">
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
                  className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center justify-center">
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-3 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:ring-0 focus:border-gray-300 outline-none"
                  >
                    <option value="LK" className="pl-3">
                      🇱🇰
                    </option>
                    <option value="US" className="pl-3">
                      🇺🇸
                    </option>
                    <option value="IN" className="pl-3">
                      🇮🇳
                    </option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="block w-full pl-16 sm:pl-14 pr-3 py-2 rounded-xl border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                  placeholder="+94"
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
                  className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="text-xs mt-1 text-gray-500 ">Use 8 or more characters with a mix of letters, numbers & symbols</p>
            </div>
          </div>
        </div>
        <fieldset>
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
                <p className="font-normal">
                  By creating an account, you agree to our{" "}
                  <span className="font-medium underline">Terms of use</span>{" "}
                  and{" "}
                  <span className="font-medium underline">Privacy Policy</span>
                </p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="condition"
                  name="condition"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <p className="font-normal">
                  By creating an account, I am also consenting to resive SMS
                  messages and emails, including products new feature updates,
                  events, and marketing promotions.
                </p>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="mt-6 flex items-center justify-start gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 bg-primary px-6 py-2 rounded-full text-white hover:bg-primary-hover transition-all duration-200"
          >
            Sign Up
          </button>
          <p className="text-xs sm:text-sm text-gray-700">
            Allready have an account?{" "}
            <Link
              href="/sign-in"
              className="underline text-gray-800 font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

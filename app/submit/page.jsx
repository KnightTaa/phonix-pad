"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

const Submit = () => {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioChange = (radioId) => {
    setSelectedRadio(radioId);
  };

  return (
    <div className="px-2 sm:px-10 py-10">
      <form className="w-full flex flex-col sm:flex-row gap-5">
        {/* left side of form */}
        <div className="w-full sm:w-[50%] py-2">
          <h1 className="uppercase text-2xl text-start sm:text-5xl font-semibold">
            Select your project
          </h1>
          <fieldset className="mt-5">
            <div className="flex items-center gap-10">
              <input
                id="shorts"
                name="project"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
                checked={selectedRadio === "shorts"}
                onChange={() => handleRadioChange("shorts")}
              />
              <div
                onClick={() => handleRadioChange("shorts")}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedRadio === "shorts" ? "w-[150px]" : "w-[120px]"
                }`}
              >
                <Image
                  src="/image 7.png"
                  width={400}
                  height={400}
                  alt="logo"
                  className="h-auto"
                />
              </div>
              <input
                id="brands"
                name="project"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
                checked={selectedRadio === "brands"}
                onChange={() => handleRadioChange("brands")}
              />
              <div
                onClick={() => handleRadioChange("brands")}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedRadio === "brands" ? "w-[150px]" : "w-[120px]"
                }`}
              >
                <Image
                  src="/image 10.png"
                  width={400}
                  height={400}
                  alt="logo"
                  className="h-auto"
                />
              </div>
              <input
                id="products"
                name="project"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
                checked={selectedRadio === "products"}
                onChange={() => handleRadioChange("products")}
              />
              <div
                onClick={() => handleRadioChange("products")}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedRadio === "products" ? "w-[150px]" : "w-[120px]"
                }`}
              >
                <Image
                  src="/image 11.png"
                  width={400}
                  height={400}
                  alt="logo"
                  className="h-auto"
                />
              </div>
            </div>
          </fieldset>
          <h1 className="uppercase text-xl text-start sm:text-3xl font-semibold mt-10">
            Select your project
          </h1>
          <p className="text-lg font-medium mt-5 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* right side of form */}
        <div className="w-full sm:w-[50%] border border-gray-700 p-8 rounded-xl">
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
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-500"
                >
                  Upload your File
                </label>
                <div className="mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <CloudArrowUpIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-xl bg-white font-semibold text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Browse</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-500/60">
                    Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, WORD,
                    PPT
                  </p>
                </div>
                <div className="mt-2 flex flex-col gap-4">
                  <span className="text-sm font-medium text-gray-500">
                    Uploading - 3/3 files
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Uploaded
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start gap-x-6">
            <button
              type="button"
              className="text-sm w-full font-semibold leading-6 bg-primary px-6 py-2 rounded-full text-white hover:bg-primary-hover transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Submit;

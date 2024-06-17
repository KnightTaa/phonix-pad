"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Image from "next/image";

const countries = [
  { value: "LK", label: "🇱🇰", code: "+94" },
  { value: "US", label: "🇺🇸", code: "+1" },
  { value: "IN", label: "🇮🇳", code: "+91" },
  { value: "UK", label: "🇬🇧", code: "+44" },
  { value: "CA", label: "🇨🇦", code: "+1" },
  { value: "AU", label: "🇦🇺", code: "+61" },
  { value: "DE", label: "🇩🇪", code: "+49" },
  { value: "FR", label: "🇫🇷", code: "+33" },
  { value: "JP", label: "🇯🇵", code: "+81" },
  { value: "CN", label: "🇨🇳", code: "+86" },
  { value: "BR", label: "🇧🇷", code: "+55" },
  { value: "RU", label: "🇷🇺", code: "+7" },
  { value: "MX", label: "🇲🇽", code: "+52" },
  { value: "AR", label: "🇦🇷", code: "+54" },
  { value: "TR", label: "🇹🇷", code: "+90" },
  { value: "PH", label: "🇵🇭", code: "+63" },
];

const SignUpForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const phonePlaceholder = selectedCountry ? selectedCountry.code : "";

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const passwordType = showPassword ? "text" : "password";

  const [selectedRadio, setSelectedRadio] = useState("shorts");
  const [bgColor, setBgColor] = useState("bg-yellow-400");
  const [textColor, setTextColor] = useState("text-black");

  const handleRadioChange = (radioId) => {
    setSelectedRadio(radioId);
    switch (radioId) {
      case "shorts":
        setBgColor("bg-[#f7e114]");
        setTextColor("text-black");
        break;
      case "brands":
        setBgColor("bg-[#ee1d52]");
        setTextColor("text-white");
        break;
      case "products":
        setBgColor("bg-[#00d3c8]");
        setTextColor("text-black");
        break;
      default:
        break;
    }
  };
  return (
    <section className={`w-full min-h-screen ${bgColor}`}>
      <form className="w-full flex flex-col md:flex-col lg:flex-row items-center justify-between gap-5 p-2 sm:p-4">
        {/* left side */}
        <div className="w-full min-h-screen md:w-full lg:w-1/2 flex justify-center flex-col gap-2">
          <fieldset className="mt-5">
          {/* className="flex items-center gap-10" */}
          {/* "grid grid-cols-1 sm:grid-cols-3 gap-5 items-center justify-center" */}
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
                  selectedRadio === "shorts" ? "w-[100px] md:w-[120px] lg:w-[200px]" : "w-[80px] md:w-[120px] lg:w-[160px]"
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
              {/* "w-[100px]" : "w-[80px]" */}
              <div
                onClick={() => handleRadioChange("brands")}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedRadio === "brands" ? "w-[100px] md:w-[120px] lg:w-[200px]" : "w-[80px] md:w-[120px] lg:w-[160px]"
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
                  selectedRadio === "products" ? "w-[100px] md:w-[120px] lg:w-[200px]" : "w-[80px] md:w-[120px] lg:w-[160px]"
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
          <h1
            className={`uppercase text-xl text-start sm:text-4xl font-semibold mt-10 sm:mt-20 ${textColor}`}
          >
            Criteria
          </h1>
          <p
            className={`text-base sm:text-lg font-normal mt-5 leading-6 sm:leading-8 ${textColor}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* right side */}
        <div className="w-full md:w-full lg:w-1/2 py-5 px-2 sm:p-8 mt-5 sm:mt-0 bg-black rounded-tr-none sm:rounded-tr-[25%]">
          <h1
            className={`uppercase text-xl text-start sm:text-4xl font-semibold mb-10 text-white`}
          >
            Sign Up
          </h1>
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-lg border-0 py-1.5 px-2 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-lg border-0 py-1.5 px-2 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

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
                    autoComplete="email"
                    className="block w-full rounded-lg border-0 py-1.5 px-2 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center justify-center">
                    <select
                      id="country"
                      name="country"
                      value={selectedCountry.value}
                      className="h-full py-0 pl-3 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:ring-0 focus:border-gray-300 outline-none"
                      onChange={(event) => {
                        const selectedCountry = countries.find(
                          (country) => country.value === event.target.value
                        );
                        setSelectedCountry(selectedCountry);
                      }}
                    >
                      {countries.map((country, index) => (
                        <option
                          key={index}
                          value={country.value}
                          className="pl-3"
                        >
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="block w-full pl-16 sm:pl-14 pr-3 py-2 rounded-lg border-0 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder={phonePlaceholder}
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
                    autoComplete="+94"
                    className="block w-full rounded-lg border-0 py-1.5 px-2 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="text-xs mt-1 text-white/80">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
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
                  <p className="font-normal text-white">
                    By creating an account, you agree to our{" "}
                    <span className="font-medium underline">Terms of use</span>{" "}
                    and{" "}
                    <span className="font-medium underline">
                      Privacy Policy
                    </span>
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
                  <p className="font-normal text-white">
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
            <p className="text-xs sm:text-sm text-white/80">
              Allready have an account?{" "}
              <Link
                href="/sign-in"
                className="underline text-white font-semibold"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import Wrapper from "@/components/Wrapper";

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

const UploadForm = () => {
  const [selectedRadio, setSelectedRadio] = useState("shorts");
  const [bgColor, setBgColor] = useState("bg-yellow-400");
  const [textColor, setTextColor] = useState("text-black");

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const phonePlaceholder = selectedCountry ? selectedCountry.code : "";

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

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
    <section className={`w-full min-h-screen font-arial ${bgColor}`}>
      <Wrapper className="w-full min-h-screen flex flex-col items-center justify-center">
        <form className="w-full flex flex-col md:flex-col lg:flex-row justify-between gap-5 p-2 sm:p-4">
          {/* left side */}
          <div className="w-full md:w-full lg:w-1/2 flex flex-col gap-2">
            <h1
              className={`uppercase text-2xl text-start sm:text-5xl font-semibold ${textColor}`}
            >
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
              className={`uppercase text-xl text-start sm:text-3xl font-semibold mt-10 ${textColor}`}
            >
              Select your project
            </h1>
            <p
              className={`text-base sm:text-lg font-medium mt-5 leading-6 sm:leading-8 ${textColor}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          {/* right side */}
          <div className="w-full md:w-full lg:w-1/2 p-4 sm:p-8 mt-5 sm:mt-0 bg-black rounded-tr-none sm:rounded-tr-[20%]">
          <h1
              className={`uppercase text-xl text-start sm:text-4xl font-semibold mb-10 text-white`}
            >
              Upload
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
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Upload your File
                  </label>
                  <div className="mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-white/35 px-6 py-10">
                    <CloudArrowUpIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-xl font-semibold text-white/75 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-white transition-all duration-200"
                      >
                        <span>Browse</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1 text-white/75">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-white/75">
                      Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI,
                      WORD, PPT
                    </p>
                  </div>
                  <div className="mt-2 flex flex-col gap-4">
                    <span className="text-sm font-medium text-white">
                      Uploading - 3/3 files
                    </span>
                    <span className="text-sm font-medium text-white">
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
      </Wrapper>
    </section>
  );
};

export default UploadForm;
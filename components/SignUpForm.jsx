"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Image from "next/image";
import Wrapper from "./Wrapper";
import API from "../services/api";
import { toast } from "react-toastify";

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

// Create a map for the criteria descriptions
const criteriaDescriptions = {
  shorts:
    "shots Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab.",
  brands:
    "brands Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab..",
  products:
    "products Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab.",
};

const SignUpForm = ({ slug }) => {
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
  const [criteria, setCriteria] = useState(criteriaDescriptions["shorts"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    password: "",
    password_confirmation: "",
    mobile: "",
    eventType: "",
  });

  useEffect(() => {
    if (slug === "shorts") {
      setSelectedRadio("shorts");
      setBgColor("bg-[#f7e114]");
      setTextColor("text-black");
    } else if (slug === "brands") {
      setSelectedRadio("brands");
      setBgColor("bg-[#ee1d52]");
      setTextColor("text-white");
    } else if (slug === "products") {
      setSelectedRadio("products");
      setBgColor("bg-[#00d3c8]");
      setTextColor("text-black");
    }
  }, [slug]);

  const handleRadioChange = (radioId) => {
    setSelectedRadio(radioId);
    switch (radioId) {
      case "shorts":
        setBgColor("bg-[#f7e114]");
        setTextColor("text-black");
        setCriteria(criteriaDescriptions["shorts"]);
        setFormData((prevData) => ({
          ...prevData,
          ["eventType"]: "shorts",
        }));
        break;
      case "brands":
        setBgColor("bg-[#ee1d52]");
        setTextColor("text-white");
        setCriteria(criteriaDescriptions["brands"]);
        setFormData((prevData) => ({
          ...prevData,
          ["eventType"]: "brands",
        }));
        break;
      case "products":
        setBgColor("bg-[#00d3c8]");
        setTextColor("text-black");
        setCriteria(criteriaDescriptions["products"]);
        setFormData((prevData) => ({
          ...prevData,
          ["eventType"]: "products",
        }));
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("aaaaaaaaaaa.aaaaaaaa..", formData);
    e.preventDefault();
    let postdata = {
      name: formData.firstname + " " + formData.lastname,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password,
      mobile: formData.mobile,
      eventType: formData.eventType ? formData.eventType : "shorts",
    };
    try {
      const response = await API.post("/register", postdata);
      localStorage.setItem("access_token", response.data.access_token);
      toast.success("Register successfully!");
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("Error submitting form");
    }
  };
  return (
    <section className={`w-full min-h-screen font-arial ${bgColor}`}>
      <Wrapper>
        <form
          className="w-full flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 p-2 sm:p-4"
          onSubmit={handleSubmit}
        >
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
                    selectedRadio === "shorts"
                      ? "w-[100px] md:w-[120px] lg:w-[200px]"
                      : "w-[80px] md:w-[120px] lg:w-[160px]"
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
                    selectedRadio === "brands"
                      ? "w-[100px] md:w-[120px] lg:w-[200px]"
                      : "w-[80px] md:w-[120px] lg:w-[160px]"
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
                    selectedRadio === "products"
                      ? "w-[100px] md:w-[120px] lg:w-[200px]"
                      : "w-[80px] md:w-[120px] lg:w-[160px]"
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
              {criteria}
            </p>
          </div>

          {/* right side */}
          <div className="w-full md:w-full lg:w-1/2 py-5 px-2 sm:p-8 mt-5 sm:mt-0 bg-black rounded-tr-none sm:rounded-tr-[20%] relative">
            <div
              className={`hidden sm:block w-5 h-5 rounded-full absolute bottom-0 right-0 mb-5 mr-5 ${bgColor}`}
            />
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
                      name="firstname"
                      id="first-name"
                      onChange={handleChange}
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
                      name="lastname"
                      onChange={handleChange}
                      id="lastname"
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
                      onChange={handleChange}
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
                      name="mobile"
                      id="phone"
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      <span className="font-medium underline">
                        Terms of use
                      </span>{" "}
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
                      messages and emails, including products new feature
                      updates, events, and marketing promotions.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="mt-6 flex items-center justify-start gap-x-6">
              <button
                type="submit"
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
      </Wrapper>
    </section>
  );
};

export default SignUpForm;

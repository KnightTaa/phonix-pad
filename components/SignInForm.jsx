"use client";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import IconBox from "./iconBox";
import Link from "next/link";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

// Create a map for the criteria descriptions
const criteriaDescriptions = {
  shorts:
    "shots Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab.",
  brands:
    "brands Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab..",
  products:
    "products Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab.",
};

const SignInForm = () => {
  const [selectedRadio, setSelectedRadio] = useState("shorts");
  const [bgColor, setBgColor] = useState("bg-[#f7e114]");
  const [textColor, setTextColor] = useState("text-black");
  const [criteria, setCriteria] = useState(criteriaDescriptions["shorts"]);

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const passwordType = showPassword ? "text" : "password";

  const handleRadioChange = (radioId) => {
    setSelectedRadio(radioId);
    switch (radioId) {
      case "shorts":
        setBgColor("bg-[#f7e114]");
        setTextColor("text-black");
        setCriteria(criteriaDescriptions["shorts"]);
        break;
      case "brands":
        setBgColor("bg-[#ee1d52]");
        setTextColor("text-white");
        setCriteria(criteriaDescriptions["brands"]);
        break;
      case "products":
        setBgColor("bg-[#00d3c8]");
        setTextColor("text-black");
        setCriteria(criteriaDescriptions["products"]);
        break;
      default:
        break;
    }
  };

  return (
    <section className={`w-full min-h-screen font-arial ${bgColor}`}>
      <Wrapper className="w-full flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 p-2 sm:p-4">
        {/* Left Side */}
        <div className="w-full min-h-screen md:w-full lg:w-1/2 flex justify-center flex-col gap-2">
          <div className="mt-5">
            <div className="flex items-center gap-10">
              <button
                className="outline-none z-10"
                onClick={() => handleRadioChange("shorts")}
              >
                <Image
                  src="/image 7.png"
                  width={400}
                  height={400}
                  alt="Shots for Life"
                  className={`${
                    selectedRadio === "shorts"
                      ? "w-[100px] md:w-[120px] lg:w-[200px]"
                      : "w-[80px] md:w-[120px] lg:w-[160px] h-auto"
                  } transition-all duration-300 ease-in-out`}
                />
              </button>
              <button onClick={() => handleRadioChange("brands")}>
                <Image
                  src="/image 10.png"
                  width={400}
                  height={400}
                  alt="Brands for Life"
                  className={`${
                    selectedRadio === "brands"
                      ? "w-[100px] md:w-[120px] lg:w-[200px]"
                      : "w-[80px] md:w-[120px] lg:w-[160px] h-auto"
                  } transition-all duration-300 ease-in-out`}
                />
              </button>
              <button onClick={() => handleRadioChange("products")}>
                <Image
                  src="/image 11.png"
                  width={400}
                  height={400}
                  alt="Products for Life"
                  className={`${
                    selectedRadio === "products"
                      ? "w-[100px] md:w-[120px] lg:w-[200px]"
                      : "w-[80px] md:w-[120px] lg:w-[160px] h-auto"
                  } transition-all duration-300 ease-in-out`}
                />
              </button>
            </div>
          </div>
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

        {/* Right Side */}
        <div className="w-full min-h-screen md:w-full lg:w-1/2 flex items-center justify-center -mt-44 sm:mt-0">
          <form className="border w-full border-gray-950 px-5 sm:px-16 py-10 bg-black rounded-tr-none sm:rounded-tr-[20%] relative">
            <div
              className={`hidden sm:block w-5 h-5 rounded-full absolute bottom-0 right-0 mb-5 mr-5 ${bgColor}`}
            />
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
                  <span className="font-medium underline">Terms of use</span>{" "}
                  and{" "}
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
            <span className="flex items-center my-5">
              <span className="h-px flex-1 bg-gray-500"></span>
              <span className="shrink-0 px-6 font-bold text-white">
                Or continue with
              </span>
              <span className="h-px flex-1 bg-gray-500"></span>
            </span>

            <div className="flex items-center justify-center gap-8">
              <IconBox
                icon={"facebook"}
                className="w-9 h-auto cursor-pointer"
              />
              <IconBox icon={"applew"} className="w-8 h-auto cursor-pointer" />
              <IconBox icon={"google"} className="w-8 h-auto cursor-pointer" />
              <IconBox icon={"xwhite"} className="w-7 h-auto cursor-pointer" />
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default SignInForm;

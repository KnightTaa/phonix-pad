"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import Wrapper from "@/components/Wrapper";
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

const criteriaDescriptions = {
  shorts:
    "shots Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab.",
  brand:
    "brands Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab..",
  project:
    "products Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur ducimus ab sunt mollitia, magnam eveniet. Similique tempora eligendi dolorem soluta veritatis laboriosam nostrum quo culpa aperiam officiis doloremque pariatur excepturi voluptates magni mollitia corrupti, dicta ut rem laborum possimus illum nobis? Vero deserunt eum repellendus porro in nobis excepturi, est earum aspernatur quos necessitatibus tempore a nihil facere ab beatae doloribus libero animi quisquam, rerum molestias neque! Vel non deleniti dignissimos cumque perferendis distinctio voluptatum praesentium officia explicabo ab.",
};

const UploadForm = ({ slug }) => {
  const [selectedRadio, setSelectedRadio] = useState("shorts");
  const [bgColor, setBgColor] = useState("bg-yellow-400");
  const [textColor, setTextColor] = useState("text-black");
  const [criteria, setCriteria] = useState(criteriaDescriptions["shorts"]);
  const [selectedTheme, setSelectedTheme] = useState("shorts");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [file, setFile] = useState(null);
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dis, setDis] = useState('');
  const [message, setMessage] = useState('');

  const phonePlaceholder = selectedCountry ? selectedCountry.code : "";

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (e) => {
    // console.log(e.target.files[0]);
    // setFile(e.target.files[0]);
    const selectedFile = e.target.files[0];
        console.log("Selected File:", selectedFile);
        setFile(selectedFile);
  };

  const handleFNameChange = (e) => {
    setFname(e.target.value);
  };

  const handleLNameChange = (e) => {
    setLname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDisChange = (e) => {
    setDis(e.target.value);
  };


  useEffect(() => {
    if (slug === "shorts") {
      setSelectedRadio("shorts");
      setBgColor("bg-[#f7e114]");
      setTextColor("text-black");
      setSelectedTheme("shorts");
    } else if (slug === "brand") {
      setSelectedRadio("brand");
      setBgColor("bg-[#ee1d52]");
      setTextColor("text-white");
      setSelectedTheme("brand");
    } else if (slug === "project") {
      setSelectedRadio("project");
      setBgColor("bg-[#00d3c8]");
      setTextColor("text-black");
      setSelectedTheme("project");
    }
  }, [slug]);

  const handleRadioChange = (radioId) => {
    setSelectedRadio(radioId);
    switch (radioId) {
      case "shorts":
        setBgColor("bg-[#f7e114]");
        setTextColor("text-black");
        setCriteria(criteriaDescriptions["shorts"]);
        setSelectedTheme("shorts");
        break;
      case "brand":
        setBgColor("bg-[#ee1d52]");
        setTextColor("text-white");
        setCriteria(criteriaDescriptions["brand"]);
        setSelectedTheme("brand");
        break;
      case "project":
        setBgColor("bg-[#00d3c8]");
        setTextColor("text-black");
        setCriteria(criteriaDescriptions["project"]);
        setSelectedTheme("project");
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    console.log(file, 'afa');
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', fName + " " + lName);
    formData.append('filename', 'test123');
    formData.append('email', email);
    formData.append('phoneNumber', phone);
    formData.append('decription', dis);
    formData.append('eventType', (selectedTheme === "shorts") ? "life" : selectedTheme);

    // console.log(formData, 'formData');

    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1], 'formData');
  }

//   const response = await fetch('http://localhost:8000/api/upload', {
//     method: 'POST',
//     body: formData,
// });

const response = await fetch('https://padawards.com.phoenixlk.com/backend/public/api/upload', {
  method: 'POST',
  body: formData,
});
    // const response = await API.post('/upload', formData);

    const data = await response.json();
    if (response.ok) {
      toast.success('Register successfully!');
    } else {
      console.error("Error posting data:", error);
      toast.error("Error submitting form");
    }
};
  return (
    <section className={`w-full min-h-screen font-arial ${bgColor}`}>
      <Wrapper className="w-full min-h-screen flex flex-col items-center justify-center">
        <form className="w-full flex flex-col md:flex-col lg:flex-row justify-between gap-5 p-2 sm:p-4" onSubmit={handleSubmit}>
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
                  id="brand"
                  name="brand"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
                  checked={selectedRadio === "brand"}
                  onChange={() => handleRadioChange("brand")}
                />
                <div
                  onClick={() => handleRadioChange("brand")}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedRadio === "brand"
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
                  id="project"
                  name="project"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
                  checked={selectedRadio === "project"}
                  onChange={() => handleRadioChange("project")}
                />
                <div
                  onClick={() => handleRadioChange("project")}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedRadio === "project"
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
              className={`uppercase text-xl text-start sm:text-3xl font-semibold mt-10 ${textColor}`}
            >
              Select your project
            </h1>
            <p
              className={`text-base sm:text-lg font-medium mt-5 leading-6 sm:leading-8 ${textColor}`}
            >
              {criteria}
            </p>
          </div>
          {/* right side */}
          <div className="w-full md:w-full lg:w-1/2 p-4 sm:p-8 mt-5 sm:mt-0 bg-black rounded-tr-none sm:rounded-tr-[20%] relative">
            <div
              className={`hidden sm:block w-5 h-5 rounded-full absolute bottom-0 right-0 mb-4 mr-4 ${bgColor}`}
            />
            <h1
              className={`uppercase text-xl text-start sm:text-4xl font-semibold mb-10 text-white`}
            >
              Pad Awards Submission
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
                      onChange={handleFNameChange}
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
                      onChange={handleLNameChange}
                      className="block w-full rounded-lg border-0 py-1.5 px-2 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
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
                      onChange={handleEmailChange}
                      className="block w-full rounded-lg border-0 py-1.5 px-2 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
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
                      className="block w-full pl-16 sm:pl-16 pr-3 py-2 rounded-lg border-0 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder={phonePlaceholder}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="Category"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Category
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <select
                      id="theme"
                      name="theme"
                      className="block w-full px-3 py-2 rounded-lg border-0 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      // onChange={(event) => setSelectedRadio(event.target.value)}
                      value={selectedTheme}
                      onChange={(event) => setSelectedTheme(event.target.value)}
                      disabled //If you want selectable remove this. else add this
                    >
                      <option value="shorts">Shots for life</option>
                      <option value="brand">Brands for life</option>
                      <option value="project">Products for life</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="Moods"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Moods
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <select
                      id="Moods"
                      name="Moods"
                      className="block w-full px-3 py-2 rounded-lg border-0 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      // onChange={(event) => setSelectedRadio(event.target.value)}
                      value={selectedTheme}
                      onChange={(event) => setSelectedTheme(event.target.value)}
                    >
                      <option value="eternal">Eternal</option>
                      <option value=" endlesssummer">Endless Summer</option>
                      <option value="urbansoul">Urban Soul</option>
                      <option value="urbansoul">The Whim</option>
                      <option value="urbansoul">fantasy</option>
                      <option value="urbansoul">Crazy About</option>
                      <option value="urbansoul">Nothing Hidden</option>
                      <option value="urbansoul">Where The Air Flows</option>
                      <option value="urbansoul">cool things</option>
                      <option value="urbansoul">Wonderland</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      type="description"
                      autoComplete="email"
                      onChange={handleDisChange}
                      className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none resize-none min-h-[150px]"
                    ></textarea>
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
                          onChange={handleFileChange}
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
                      Uploading - 1/1 files
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
                type="submit"
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

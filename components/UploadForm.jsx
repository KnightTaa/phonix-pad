"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import Wrapper from "@/components/Wrapper";
import API from "../services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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

const Shots = () => {
  return (
    <>
      <strong className="">
        Connection/s
      </strong>
      <p class="w-full text-justify text-lg text-black pr-5 xl:pr-6 2xl:pr-6">
        This year, PAD Awards 2025 invites creatives to reflect on a powerful and universal idea: Connection/s.
        As humans, we constantly form connections—not just with people, but with the world around us. The
        objects we hold onto, the environments we return to, even the memories we cherish—each reflects a
        bond that is deeply personal, emotional, and sometimes even invisible. We're looking for visual stories
        that explore the relationship between humans and the non-human. What does it mean to feel
        connected to a place, a possession, a moment in time? How do these connections shape our lives,
        identities, and inner worlds? Whether it's the worn-out shoes that walked you through change, a
        photograph that holds generations of memory, or a simple object that carries sentimental weight—we
        invite you to express these connections through photography, graphic design, or product design.
        Interpret the theme in your own voice. Be bold. Be honest. Be imaginative. PAD Awards 2025 is your
        platform to visually express what Connection/s means to you—through the lens of design, emotion, and
        experience.
      </p>
      <strong className="">
        All entries must meet the following criteria:
      </strong>
      <ol class="list-decimal pl-6 space-y-4 mt-5 mb-5">
        <li>
          {/* Pick one of the 10 moods from our{" "}
          <strong>
            {" "}
            <a
              href="https://phoenix.lk/media/downloads/Lookbook-LR31.1.2024.pdf"
              className="text-blue-500 underline"
              target="_blank"
            >
              2024 collection Lookbook
            </a>
          </strong>
          <ul>
            <li>
              Create a photograph that interprets the <b>PAD Awards 2025 theme: "Connection/s"</b>
            </li>
          </ul> */}
          Create a photograph that interprets the <strong>PAD Awards 2025 theme: "Connection/s"</strong>
        </li>

        <li>Tell us how your photo relates to the theme "Connection/s" (150 words max)</li>

        <li>Your entry must be your own work</li>

        <li>
          Image format <strong>JPEG</strong>.
        </li>

        <li>
          Image size: No more than <strong>25MB</strong>.
        </li>

        <li>
          Our only rule is that we want to see your photo as is (ie, No
          technical retouching, edits or copyright logos will be allowed)
        </li>

        <li>
          Enter by submitting your Photo online at pad.phoenix.lk. The
          submission deadline is the <strong>31st of August, 2025</strong>
        </li>

        <li>
          For any queries, reach out to us through Instagram at{" "}
          <a
            href="https://instagram.com/pad.phoenix"
            className="text-blue-500 underline"
            target="_blank"
          >
            @pad.phoenix
          </a>
          .
        </li>
      </ol>
      <strong>
        Super prizes await the winners! We look forward to your entry & all the
        best!!
      </strong>
      <p><strong>Terms & Conditions: </strong>The PAD jury reserves the right to not select any winners in the event that the submissions do not meet the required standards.</p>
    </>
  );
};

const Brands = () => {
  return (
    <>
      <strong className="">
        Connection/s
      </strong>
      <p class="w-full text-justify text-lg text-white pr-5 xl:pr-6 2xl:pr-6">
        This year, PAD Awards 2025 invites creatives to reflect on a powerful and universal idea: Connection/s.
        As humans, we constantly form connections—not just with people, but with the world around us. The
        objects we hold onto, the environments we return to, even the memories we cherish—each reflects a
        bond that is deeply personal, emotional, and sometimes even invisible. We're looking for visual stories
        that explore the relationship between humans and the non-human. What does it mean to feel
        connected to a place, a possession, a moment in time? How do these connections shape our lives,
        identities, and inner worlds? Whether it's the worn-out shoes that walked you through change, a
        photograph that holds generations of memory, or a simple object that carries sentimental weight—we
        invite you to express these connections through photography, graphic design, or product design.
        Interpret the theme in your own voice. Be bold. Be honest. Be imaginative. PAD Awards 2025 is your
        platform to visually express what Connection/s means to you—through the lens of design, emotion, and
        experience.
      </p>
      <strong className="">
        All entries must meet the following criteria:
      </strong>
      <ol class="list-decimal pl-6 space-y-4 mt-5 mb-5">
        {/* <li>
          Pick <strong>any</strong> product or service inspired by one of the
          ten moods in our
          <strong>
            {" "}
            <strong>
              {" "}
              <a
                href="https://phoenix.lk/media/downloads/Lookbook-LR31.1.2024.pdf"
                className="text-blue-500 underline"
                target="_blank"
              >
                2024 collection Lookbook
              </a>
            </strong>
          </strong>
          , and develop a hypothetical brand identity for it
        </li> */}

        <li>Pick any product or service inspired by the <strong>PAD Awards 2025 theme: "Connection/s"</strong>, and develop a hypothetical brand identity for it</li>

        {/* <li>Tell us the prompt you chose</li> */}

        <li>
          The reason you chose the product/service and how it was inspired by
          the prompt you chose (Max 150 words)
        </li>

        <li>
          <strong>Your brand identity should include:</strong>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Not just a logo, but also examples of its application across
              different items as part of the product’s brand visual system (as
              many examples you create, the more opportunity for the jury to
              understand your idea)
            </li>
            <li>How would you promote your product/service</li>
          </ul>
        </li>

        <li>Your entry must be your own work</li>

        <li>
          Entry format: <strong>PDF</strong>.
        </li>

        <li>
          Entry file size: No more than <strong>25MB</strong>.
        </li>

        <li>
          Enter by submitting your Photo online at pad.phoenix.lk. The
          submission deadline is the <strong> 31st of August, 2025</strong>
        </li>

        <li>
          For any queries, reach out to us through Instagram at{" "}
          <a
            href="https://instagram.com/pad.phoenix"
            className="text-blue-500 underline"
            target="_blank"
          >
            @pad.phoenix
          </a>
          .
        </li>
      </ol>
      <strong>
        Super prizes await the winners! We look forward to your entry & all the
        best!!
      </strong>
      <p><strong>Terms & Conditions: </strong>The PAD jury reserves the right to not select any winners in the event that the submissions do not meet the required standards.</p>
    </>
  );
};

const Products = () => {
  return (
    <>
      <strong className="">
        Connection/s
      </strong>
      <p class="w-full text-justify text-lg text-black pr-5 xl:pr-6 2xl:pr-6">
        This year, PAD Awards 2025 invites creatives to reflect on a powerful and universal idea: Connection/s.
        As humans, we constantly form connections—not just with people, but with the world around us. The
        objects we hold onto, the environments we return to, even the memories we cherish—each reflects a
        bond that is deeply personal, emotional, and sometimes even invisible. We're looking for visual stories
        that explore the relationship between humans and the non-human. What does it mean to feel
        connected to a place, a possession, a moment in time? How do these connections shape our lives,
        identities, and inner worlds? Whether it's the worn-out shoes that walked you through change, a
        photograph that holds generations of memory, or a simple object that carries sentimental weight—we
        invite you to express these connections through photography, graphic design, or product design.
        Interpret the theme in your own voice. Be bold. Be honest. Be imaginative. PAD Awards 2025 is your
        platform to visually express what Connection/s means to you—through the lens of design, emotion, and
        experience.
      </p>
      <strong className="">
        All entries must meet the following criteria:
      </strong>
      <ol class="list-decimal pl-6 space-y-4 mt-5 mb-5">
        {/* <li>
          Design a product inspired by one of the ten moods in our{" "}
          <strong>
            {" "}
            <a
              href="https://phoenix.lk/media/downloads/Lookbook-LR31.1.2024.pdf"
              className="text-blue-500 underline"
              target="_blank"
            >
              2025 collection Lookbook
            </a>
          </strong>
        </li> */}

        <li>Design a product inspired by the <strong>PAD Awards 2025 theme: "Connection/s"</strong></li>

        {/* <li>Tell us the prompt you chose</li> */}

        <li>
          Tell us how your product relates to the theme "Connection/s" (Max 150 words)
        </li>

        <li>
          <strong>
            The following must come through clearly in your entry:
          </strong>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Your process of identifying the idea, the conceptualization, and
              the conclusion
            </li>
            <li>
              Concept sketches (the more, the better – we would like to see how
              you put your ideas on paper!)
            </li>
            <li>
              A prototype that tests functional and aesthetic aspects (this can
              be a 3D model or a physical prototype with clay). Please insert
              clear and legible images/renders of the prototypes
            </li>
            <li>
              Your presentation should communicate the final product in a clear
              and understandable
            </li>
          </ul>
        </li>

        <li>Your entry must be your own work</li>

        <li>
          Entry format: <strong>PDF</strong>.
        </li>

        <li>
          Entry file size: No more than <strong>25MB</strong>.
        </li>

        <li>
          Enter by submitting your Photo online at pad.phoenix.lk. The
          submission deadline is the <strong> 31st of August, 2025</strong>
        </li>

        <li>
          For any queries, reach out to us through Instagram at{" "}
          <a
            href="https://instagram.com/pad.phoenix"
            className="text-blue-500 underline"
            target="_blank"
          >
            @pad.phoenix
          </a>
          .
        </li>
      </ol>
      <strong>
        Super prizes await the winners! We look forward to your entry & all the
        best!!
      </strong>
      <p><strong>Terms & Conditions: </strong>The PAD jury reserves the right to not select any winners in the event that the submissions do not meet the required standards.</p>
    </>
  );
};

const DesShots = () => {
  return (
    <div class="container mx-auto justify-between">
      <p class="w-full text-justify text-lg pr-10 xl:pr-2 2xl:pr-2">
        Platform to promote, support and recognize all those who use an image as
        a vehicle to express their creativity, feelings, memories; all that a
        creative, professional or amateur want to transmit to society.
      </p>
    </div>
  );
};

const DesBrands = () => {
  return (
    <div class="container mx-auto justify-between">
      <p class="w-full text-justify text-lg text-white pr-5 xl:pr-6 2xl:pr-6">
        Platform to promote all those who want to bring color to our lives, by
        creating bold, impactful, and meaningful visual languages that tell
        important stories.
      </p>
    </div>
  );
};

const DesProducts = () => {
  return (
    <div class="container mx-auto justify-between">
      <p class="w-full text-justify text-lg pr-8 xl:pr-20 2xl:pr-20">
        Platform to promote all those who want to bring color to our lives, by
        creating bold, impactful, and meaningful visual languages that tell
        important stories.
      </p>
    </div>
  );
};

const criteriaDescriptions = {
  shots: <Shots />,
  brands: <Brands />,
  products: <Products />,
};

const criteriaTitles = {
  shots: "Shots for Life (Photography)",
  brands: "Brands for Life (Graphic Design)",
  products: "Products for Life (Product & Industrial Design)",
};

const descriptions = {
  shots: <DesShots />,
  brands: <DesBrands />,
  products: <DesProducts />,
};

const DesTitles = {
  shots: "Shots",
  brands: "Brands",
  products: "Products",
};

const UploadForm = ({ slug }) => {
  const router = useRouter();
  const [selectedRadio, setSelectedRadio] = useState("shots");
  const [bgColor, setBgColor] = useState("bg-[#f7e114]");
  const [textColor, setTextColor] = useState("text-black");
  const [title, setTitle] = useState(criteriaTitles["shots"]);
  const [desTitle, setDesTitle] = useState(DesTitles["shots"]);
  const [criteria, setCriteria] = useState(criteriaDescriptions["shots"]);
  const [description, setDescription] = useState(descriptions["shots"]);
  const [selectedTheme, setSelectedTheme] = useState("shots");
  const [selectedMood, setSelectedMood] = useState("eternal");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [file, setFile] = useState(null);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dis, setDis] = useState("");
  const [message, setMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [isFileReady, setIsFileReady] = useState(false);

  const phonePlaceholder = selectedCountry ? selectedCountry.code : "";

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleFileChange = (e) => {
  //   // console.log(e.target.files[0]);
  //   // setFile(e.target.files[0]);
  //   const maxSize = 25 * 1024 * 1024;
  //   const selectedFile = e.target.files[0];
  //   console.log("Selected File:", selectedFile);
  //   if (selectedFile.type === "image/png" || selectedFile.type === "image/jpeg" || selectedFile.type === "image/jpg" || selectedFile.type === "application/pdf" || selectedFile.type === "image/heic" || selectedFile.type === "image/heif" || selectedFile.type === "") {
  //     if (selectedFile.size < maxSize) {
  //       setUploadProgress(0);
  //       setFile(selectedFile);
  //     } else {
  //       toast.error("File size exceeds 25MB");
  //     }
  //   } else {
  //     toast.error("Please select an image file (jpeg, jpg, pdf)");
  //   }
  // };

  const handleFileChange = (e) => {
    const maxSize = 25 * 1024 * 1024;
    const selectedFile = e.target.files[0];
    console.log("Selected File:", selectedFile);
    if (selectedFile.type === "image/png" || selectedFile.type === "image/jpeg" || selectedFile.type === "image/jpg" || selectedFile.type === "application/pdf" || selectedFile.type === "image/heic" || selectedFile.type === "image/heif" || selectedFile.type === "") {
      if (selectedFile.size < maxSize) {
        setUploadProgress(0);
        setFile(selectedFile);
	setIsFileReady(true);
      } else {
        toast.error("File size exceeds 25MB");
	setIsFileReady(false);
      }
    } else {
      toast.error("Please select an image file (jpeg, jpg, pdf)");
      setIsFileReady(false);
    }
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
    if (slug === "shots") {
      setSelectedRadio("shots");
      setBgColor("bg-[#f7e114]");
      setTextColor("text-black");
      setSelectedTheme("shots");
      setCriteria(criteriaDescriptions["shots"]);
      setTitle(criteriaTitles["shots"]);
      setDesTitle(DesTitles["shots"]);
      setDescription(descriptions["shots"]);
    } else if (slug === "brands") {
      setSelectedRadio("brands");
      setBgColor("bg-[#ea4747]");
      setTextColor("text-white");
      setSelectedTheme("brands");
      setCriteria(criteriaDescriptions["brands"]);
      setTitle(criteriaTitles["brands"]);
      setDesTitle(DesTitles["brands"]);
      setDescription(descriptions["brands"]);
    } else if (slug === "products") {
      setSelectedRadio("products");
      setBgColor("bg-[#00d3c8]");
      setTextColor("text-black");
      setSelectedTheme("products");
      setCriteria(criteriaDescriptions["products"]);
      setTitle(criteriaTitles["products"]);
      setDesTitle(DesTitles["products"]);
      setDescription(descriptions["products"]);
    }
  }, [slug]);

  const handleRadioChange = (radioId) => {
    setSelectedRadio(radioId);
    switch (radioId) {
      case "shots":
        setBgColor("bg-[#f7e114]");
        setTextColor("text-black");
        setCriteria(criteriaDescriptions["shots"]);
        setTitle(criteriaTitles["shots"]);
        setDesTitle(DesTitles["shots"]);
        setDescription(descriptions["shots"]);
        setSelectedTheme("shots");
        break;
      case "brands":
        setBgColor("bg-[#ea4747]");
        setTextColor("text-white/90");
        setCriteria(criteriaDescriptions["brands"]);
        setTitle(criteriaTitles["brands"]);
        setDesTitle(DesTitles["brands"]);
        setDescription(descriptions["brands"]);
        setSelectedTheme("brands");
        break;
      case "products":
        setBgColor("bg-[#00d3c8]");
        setTextColor("text-black");
        setCriteria(criteriaDescriptions["products"]);
        setTitle(criteriaTitles["products"]);
        setDesTitle(DesTitles["products"]);
        setDescription(descriptions["products"]);
        setSelectedTheme("products");
        break;
      default:
        break;
    }
  };

  // New Handle Submit Function
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setUploading(true);
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("name", fName + " " + lName);
  //   formData.append("email", email);
  //   formData.append("phoneNumber", phone);
  //   formData.append("decription", dis);
  //   formData.append(
  //     "eventType",
  //     selectedTheme === "shots"
  //       ? "short"
  //       : selectedTheme === "brands"
  //         ? "brand"
  //         : "project"
  //   );
  //   formData.append("eventMood", selectedMood);

  //   for (let pair of formData.entries()) {
  //     console.log(pair[0] + ": " + pair[1], "formData");
  //   }

  //   try {
  //     const response = await fetch(
  //       "https://pad-admin.phoenix.lk/padadminsub/public/api/upload",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization:
  //             "Bearer 17|Xd9A9wAgcN8oYCeck3BRRc83bged5AQZbig7t3cZ1efba533",
  //         },
  //         body: formData,
  //         onUploadProgress: (progressEvent) => {
  //           const total = progressEvent.total;
  //           const current = progressEvent.loaded;
  //           const progress = Math.round((current / total) * 100);
  //           setUploadProgress(progress);
  //         },
  //       }
  //     );

  //     const data = await response.json();
  //     if (response.ok) {
  //       setUploadProgress(100);
  //       router.push("/success");
  //     } else {
  //       router.push("/error");
  //     }
  //   } catch (error) {
  //     router.push("/error");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFileReady) {
      toast.error("Please select a valid file before submitting");
      return;
    }
    setUploading(true);
    // Validate input fields
    if (!fName || !fName.trim()) {
      toast.error("First name is required");
      setUploading(false);
      return;
    }
    if (!lName || !lName.trim()) {
      toast.error("Last name is required");
      setUploading(false);
      return;
    }
    if (!email || !email.trim()) {
      toast.error("Email is required");
      setUploading(false);
      return;
    }
    // Simple email regex for validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      setUploading(false);
      return;
    }
    if (!phone || !phone.trim()) {
      toast.error("Phone number is required");
      setUploading(false);
      return;
    }
    if (!dis || !dis.trim()) {
      toast.error("Description is required");
      setUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", fName + " " + lName);
    formData.append("email", email);
    formData.append("phoneNumber", phone);
    formData.append("decription", dis);
    formData.append(
      "eventType",
      selectedTheme === "shots"
      ? "short"
      : selectedTheme === "brands"
        ? "brand"
        : "project"
    );
    formData.append("eventMood", null);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1], "formData");
    }

    try {
      router.push("/error");
      // const response = await fetch(
      //   "https://pad-backend.phoenix.lk/public/api/upload",
      //   {
      //     method: "POST",
      //     headers: {
      //       // 'Content-Type': 'multipart/form-data',
      //       Authorization:
      //         "Bearer 17|Xd9A9wAgcN8oYCeck3BRRc83bged5AQZbig7t3cZ1efba533",
      //     },
      //     body: formData,
      //     onUploadProgress: (progressEvent) => {
      //       const total = progressEvent.total;
      //       const current = progressEvent.loaded;
      //       const progress = Math.round((current / total) * 100);
      //       setUploadProgress(progress);
      //     },
      //   }
      // );

      // const data = await response.json();
      // if (response.ok) {
      //   setUploadProgress(100);
      //   router.push("/success");
      // } else {
      //   router.push("/error");
      // }
    } catch (error) {
      router.push("/error");
    }
  };

  return (
    <section className={`w-full min-h-screen font-arial ${bgColor}`}>
      <Wrapper className="w-full min-h-screen flex flex-col items-center justify-center">
        <form
          className="w-full flex flex-col md:flex-col lg:flex-row justify-between gap-5 p-2 sm:p-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full md:w-full lg:w-1/2 flex flex-col gap-2">
            <h1
              className={`uppercase text-2xl text-start sm:text-5xl font-semibold ${textColor}`}
            >
              Select your project
            </h1>

            <fieldset className="mt-5">
              <div className="flex items-center gap-10">
                <input
                  id="shots"
                  name="shots"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
                  checked={selectedRadio === "shots"}
                  onChange={() => handleRadioChange("shots")}
                />
                <div
                  onClick={() => handleRadioChange("shots")}
                  className={`cursor-pointer transition-all duration-300 ${selectedRadio === "shots"
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
                  name="brands"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
                  checked={selectedRadio === "brands"}
                  onChange={() => handleRadioChange("brands")}
                />
                <div
                  onClick={() => handleRadioChange("brands")}
                  className={`cursor-pointer transition-all duration-300 ${selectedRadio === "brands"
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
                  name="products"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hidden"
                  checked={selectedRadio === "products"}
                  onChange={() => handleRadioChange("products")}
                />
                <div
                  onClick={() => handleRadioChange("products")}
                  className={`cursor-pointer transition-all duration-300 ${selectedRadio === "products"
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
            <div className="my-5">
              <h2 className="uppercase text-2xl text-start sm:text-5xl font-semibold text-white font-arial">
                {desTitle}{" "}
                <span className="font-bold uppercase font-arial text-black">
                  {" "}
                  For Life
                </span>
              </h2>

              <br />

              {description}
            </div>
            <div className="mt-1">
              <div className="mt-2">
                <button
                  type="button"
                  className={`w-full px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-200
                    ${selectedRadio === "shots" ? "bg-[#000] text-[#f7e114]"
                      : selectedRadio === "brands" ? "bg-[#000] text-[#ea4747]"
                        : selectedRadio === "products" ? "bg-[#000] text-[#00d3c8]"
                          : "bg-primary text-white"
                    }`}
                  onClick={() => {
                    // Redirect to the corresponding URL based on selectedRadio
                    if (selectedRadio === "shots") {
                      window.location.href = "/winnersshot2025";
                    } else if (selectedRadio === "brands") {
                      window.location.href = "/winnersbrand2025";
                    } else if (selectedRadio === "products") {
                      window.location.href = "/winnersproduct2025";
                    }
                  }}
                >
                  Past Winners 2025
                </button>
              </div>
            </div>
            <div className="mt-1">
              <div className="mt-2">
                <button
                  type="button"
                  className={`w-full px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-200
                    ${selectedRadio === "shots" ? "bg-[#000] text-[#f7e114]"
                      : selectedRadio === "brands" ? "bg-[#000] text-[#ea4747]"
                        : selectedRadio === "products" ? "bg-[#000] text-[#00d3c8]"
                          : "bg-primary text-white"
                    }`}
                  onClick={() => {
                    // Redirect to the corresponding URL based on selectedRadio
                    if (selectedRadio === "shots") {
                      window.location.href = "/winnersshot";
                    } else if (selectedRadio === "brands") {
                      window.location.href = "/winnersbrand";
                    } else if (selectedRadio === "products") {
                      window.location.href = "/winnersproduct";
                    }
                  }}
                >
                  Past Winners 2024
                </button>
              </div>
            </div>
            <h1
              className={`uppercase text-xl text-start sm:text-2xl font-bold mt-5 ${textColor}`}
            >
              Applying Criteria for {title}
            </h1>
            <div
              className={`text-base sm:text-lg font-medium mt-5 ${textColor}`}
            >
              {criteria}
            </div>
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
                    htmlFor="theme"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Category
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <select
                      id="theme"
                      name="theme"
                      className="block w-full px-3 py-2 rounded-lg border-0 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      value={selectedTheme}
                      onChange={(event) => setSelectedTheme(event.target.value)}
                      disabled
                    >
                      <option value="shots">Shots for Life</option>
                      <option value="brands">Brands for Life</option>
                      <option value="products">Products for Life</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Tell us how your submission related to the Theme
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      type="description"
                      autoComplete="email"
                      placeholder="Tell us how your submission related to the Theme"
                      onChange={handleDisChange}
                      className="w-full p-4 bg-white border border-gray-200 rounded-lg outline-none resize-none min-h-[150px]"
                    ></textarea>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="file-upload" className="text-white">
                      Upload your File
                    </label>
                    <div
                      className={`w-full h-[200px] flex flex-col justify-center items-center border-dashed border-2 rounded-lg ${file ? "border-green-500" : "border-[#666666]"
                        }`}
                    >
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        required
                        accept=".heic,.heif,.jpeg,.jpg,.pdf"
                      />
                      <label
                        htmlFor="file-upload"
                        className={`relative flex flex-col justify-center items-center text-sm font-medium cursor-pointer text-white`}
                      >
                        <CloudArrowUpIcon
                          className="h-12 w-12"
                          aria-hidden="true"
                        />
                        <span>
                          {file
                            ? `Selected: ${file.name}`
                            : "Browse or drag and drop"}
                        </span>
                        <span className="text-xs text-center">
                          Supported formats: JPEG, PDF
                        </span>
                      </label>
                    </div>
                    {uploading && (
                      <div className="w-full text-sm text-center mt-2 text-white">
                        Uploading - {uploadProgress}%
                      </div>
                    )}
                    {message && (
                      <div className="w-full text-center mt-2 text-green-500">
                        {message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-start gap-x-6">
              <button
                type="submit"
                className={`text-sm w-full font-semibold leading-6 px-6 py-2 rounded-full text-white hover:bg-primary-hover transition-all duration-200 ${
                  uploading || !isFileReady ? 'bg-black cursor-not-allowed' : 'bg-primary'
                }`}
                disabled={uploading || !isFileReady}
              >
                {uploading ? (
                  <>
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                        ></path>
                      </svg>
                      Uploading...
                    </div>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </Wrapper>
    </section>
  );
};

export default UploadForm;

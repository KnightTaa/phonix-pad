import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FileViewer from "@/components/FileViewer";

const Winnersproduct = () => {
  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row relative">
      {/* Sidebar */}
      <div className="w-full max-h-screen sticky top-0 sm:w-[7.5%] z-50 bg-black">
        <div className="w-full h-full rotate-0 sm:-rotate-[90deg] flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/image 1.png"}
              width={400}
              height={400}
              alt={"logo"}
              className="w-[150px] sm:w-[250px] h-auto p-5 sm:p-0"
            />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-[92.5%] bg-[#00d3c8]">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          <div className="flex flex-col sm:flex-row items-center sm:justify-start justify-center mb-4">
            <Link href={"/winnersproduct"}>
              <Image
                src={"/logo24.png"}
                width={100}
                height={100}
                alt={"logo"}
                className="w-[80px] sm:w-[110px] h-auto p-5 sm:p-0 mr-0 sm:mr-4"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/logo25.png"}
                width={100}
                height={100}
                alt={"logo"}
                className="w-[120px] sm:w-[140px] h-auto p-5 sm:p-0"
              />
            </Link>
          </div>
          <div className="flex flex-row sm:flex-row items-center justify-center sm:justify-start mb-4 gap-4">
            <Image
              src={"/image 11.png"}
              width={100}
              height={100}
              alt="trophy"
              className="w-[80px] md:w-[100px] xl:w-[120px] h-auto p-5 sm:p-0 sm:mr-4"
            />
            <h1 className="text-4xl xl:text-8xl font-semibold ml-0 lg:ml-4 mt-4 lg:mt-0 text-center lg:text-left">WINNERS</h1>
          </div>
        </div>
        {/* Winners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          {/* Winner */}
          <div className="relative text-center p-4">
            <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
              Special Mention
            </span>
            <Image
              src={"Products_for_Life_2025/Default.png"}
              width={400}
              height={400}
              alt="Winner"
              className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Nandunie Harischandra</h2>
            <p className="text-base">
              My product design, Kindred Mugs brings the theme of connection to life by making warmth dependent on togetherness. It reflects how closeness, both emotional and physical, is essential to activating something special — in this case, the heat that keeps your drink warm. Just like our relationships, the warmth doesn’t start until both ends connect.
            </p>
            <div className="p-4">
              <FileViewer fileUrl="Products_for_Life_2025/3.pdf" />
            </div>
          </div>

          {/* 1st Runner-up */}
          <div className="relative text-center p-4">
            <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
            Special Mention
          </span>
          <Image
            src={"users/Images/Default.png"}
            width={400}
            height={400}
            alt="1st Runner-up"
            className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
          />
            <h2 className="text-2xl font-bold mt-4">Nisal Kodituwakku</h2>
            <p className="text-base">
              My redesigned garbage cart embodies Connection/s by turning a daily work tool into a bridge between people, environment, and dignity. For road cleaners, the cart is more than equipment—it is their constant companion. The new design is lighter, uses fewer materials, and includes easy waste-sorting compartments that connect their effort directly to cleaner, more sustainable cities. Secure storage provides a personal connection by protecting belongings, while the built-in seat and table connect labor to moments of rest and humanity. These thoughtful changes transform the cart into more than a utility—it becomes a symbol of respect. This design creates invisible yet powerful connections between workers, the public they serve, and the shared environment we all depend on.
            </p>
            <div className="p-4">
            <FileViewer fileUrl="Products_for_Life_2025/2.pdf" />
          </div>
          </div>

          {/* 2nd Runner-up */}
          <div className="relative text-center p-4">
          <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
            Special Mention
          </span>
          <Image
            src={"users/Images/Kaveeshavihangi.jpg"}
            width={400}
            height={400}
            alt="2nd Runner-up"
            className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Kaveesha Vihangi</h2>
          <p className="text-base">
             The Sri Lankan black pepper industry faces a significant challenge as its unique flavor and aroma are often lost during local storage at the farmer level. This drawback reduces the competitiveness of Sri Lankan pepper in international markets, despite its higher potential, ultimately lowering farmers’ profits. Hump Storage is a specialized solution designed for small-scale pepper farmers to address this issue directly. Crafted from wood and cane, it offers a balance of functionality, durability, and natural aesthetics, ensuring both practicality and cultural relevance. Beyond solving the storage problem, Hump Storage also minimizes inefficiencies in harvesting, making it an integrated support for farmers. More importantly, it transforms storage from a mere function into a meaningful connection—linking farmers to effective preservation, protecting the flavor, aroma, and quality of their pepper, and ensuring labor translates into fair profit. In essence, Hump Storage safeguards not just pepper, but also dignity, effort, and livelihoods.
          </p>
          <div className="p-4">
            <FileViewer fileUrl="Products_for_Life_2025/1.pdf" />
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 p-2">
  
        <div className="relative text-center p-4 m-auto">
            {/* <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
            1st Runner-up
          </span>
          <Image
            src={"users/Images/SachinthiWirasinha.jpeg"}
            width={400}
            height={400}
            alt="1st Runner-up"
            className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
          /> */}
            <h2 className="text-2xl font-bold mt-12 pt-8">Disclaimer – Products for Life Category</h2>
            <p className="text-base">
              At Phoenix Arts & Design (PAD) Awards, we uphold the highest standards of those who push the Boundaries by using their creativity, innovation, and design excellence across all creative disciplines. After a thorough evaluation and under our values of Pushing Boundaries and Challenging Perceptions, none of the submissions of Products for Life category fully met the standards required to be selected as a winner as per the jury's opinion.
            </p>
            <br></br>
            <p className="text-base">
              However, in recognition of the effort and Interest shown in PAD, we have awarded a <b>special mention</b> for products for Life this year.
            </p>
            <br></br>
            <p className="text-base">
              We appreciate the dedication of all participants who push the boundaries and encourage continued innovation in future editions of PAD Awards.
            </p>
            {/* <div className="p-4">
            <FileViewer fileUrl="BrandsforLife/BFL-2nd.pdf" />
          </div> */}
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 p-6">
          <a href="/PAD 2025 Booklet.pdf" download={true}>
            <div className="flex items-center justify-center text-center">
              {/* <Image
                src={"/Clicktodownload/PAD Awards results announcement (2).svg"}
                width={100}
                height={100}
                alt="trophy"
                className="w-[80px] md:w-[100px] xl:w-[120px] h-auto"
              /> */}
              <h1 className="text-xl font-semibold ml-4">Click to <br /> Download</h1>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Winnersproduct;

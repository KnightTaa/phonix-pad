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
          <div className="sm:flex items-center justify-left mb-4">
            <Link href={"/apply/products"}>
              <Image
                src={"/logo25.png"}
                width={100}
                height={100}
                alt={"logo"}
                className="w-[80px] sm:w-[110px] h-auto p-5 sm:p-0 mr-4"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/logo24.png"}
                width={100}
                height={100}
                alt={"logo"}
                className="w-[120px] sm:w-[140px] h-auto p-5 sm:p-0"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/image 11.png"}
              width={100}
              height={100}
              alt="trophy"
              className="w-[80px] md:w-[100px] xl:w-[120px] h-auto"
            />
            <h1 className="text-4xl xl:text-8xl font-semibold ml-4">WINNERS</h1>
          </div>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Winner */}
          <div className="relative text-center p-4">
            <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
              Special Mention
            </span>
            <Image
              src={"users/Images/KatheshHandy.jpeg"}
              width={400}
              height={400}
              alt="Winner"
              className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Kathesh Handy</h2>
            <p className="text-base">
              CADSHAW embodies the best of what our current product portfolio offers. Using existing concepts and functional elements, together with clip-hinges, this design emphasizes ease of manufacturability and assembly. It gives users a clear understanding of how the product works and the range of ways it can be used. With our ever-growing consumer industries, people want to regain control over their clutter while also having quick access when needed. Unlike current storage options, this design encourages organization with easy access and ergonomic comfort, without the need to dig around. The various components, such as drawers, sliding tray inserts, drop-bay, and tabletop basin, make this product adaptable to all kinds of users. Whether you’re a homemaker, hairdresser, shop owner, artist, sports enthusiast, carpenter, gardener, or even a professional LEGO builder, this design seamlessly integrates into your lifestyle.
            </p>
            <div className="p-4">
              <FileViewer fileUrl="ProductsforLife/Cadshaw-PFL-specialmention.pdf" />
            </div>
          </div>

          {/* 1st Runner-up */}
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

          {/* 2nd Runner-up */}
          {/* <div className="relative text-center p-4">
          <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
            2nd Runner-up
          </span>
          <Image
            src={"users/Images/ShenalMendis.jpg"}
            width={400}
            height={400}
            alt="2nd Runner-up"
            className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Shenal Mendis</h2>
          <p className="text-base">
            "Sun Child" is a Ceylon Fragrance brand that creates summer-inspired fragrances capturing the essence of a Sri Lankan summer. Through its fragrances, Sun Child helps both Sri Lankan and international users relive their summer in Sri Lanka from anywhere in the world. The fragrances evoke nostalgia and call for an endless summer.
          </p>
          <div className="p-4">
            <FileViewer fileUrl="BrandsforLife/BFL-3rd.pdf" />
          </div>
        </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 p-6">
          <a href="/PAD-Awards - 2024 Booklet.pdf" download={true}>
            <div className="flex items-center justify-center text-center">
              <Image
                src={"/Clicktodownload/PAD Awards results announcement (2).svg"}
                width={100}
                height={100}
                alt="trophy"
                className="w-[80px] md:w-[100px] xl:w-[120px] h-auto"
              />
              {/* <h1 className="text-xl font-semibold ml-4">Click to <br /> Download</h1> */}
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Winnersproduct;

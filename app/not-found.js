import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-screen overflow-hidden">
      <Wrapper className="w-full h-full flex flex-col md:flex-col lg:flex-row items-center justify-between">
        {/* left */}
        <div className="w-full lg:w-[50%] h-[50%] sm:h-full flex items-center justify-center">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Page Not Found</h1>
            <p className="text-base sm:text-lg font-normal">
              Sorry, the page you are looking for does not exist.
            </p>
            <Link
              className="bg-primary hover:bg-primary-hover px-5 py-2 rounded-full text-base sm:text-lg font-light text-white transition-all duration-300"
              href={"/"}
            >
              Back to Home
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="w-full lg:w-[50%] h-[50%] sm:h-full flex items-center justify-center">
          <Image
            src={"/not-found.png"}
            width={1000}
            height={1000}
            alt={"logo"}
            className="w-[500px] h-auto"
          />
        </div>
      </Wrapper>
    </section>
  );
}

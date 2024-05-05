import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Join the Waitlist to get early access!
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        If you are interested in getting <span className="text-blue-600"> early access</span> to zetachi, register your interest to join the waitlist.
      </h1>

      <Link className={buttonVariants({
        size: "lg",
        className: "mt-5"
      })} href='https://tracking.getzetachi.com/zetachi-wlt' target="_blank">
      Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      </MaxWidthWrapper>
      </>
  );
}

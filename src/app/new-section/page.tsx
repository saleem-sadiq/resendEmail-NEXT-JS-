import laptop from "@/../public/laptop.png";
import ss from "@/../public/ss.png";
import header from "@/../public/header.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="max-w-[80%] mx-auto">
        {/* header */}
        <h2 className="text-70 text-primary-500 font-bold capitalize">
          get more leads
        </h2>
        <p className="text-16 font-normal text-primary-500 max-w-2xl">
          Outsorcy your go-to source for supercharging your lead generation.
          Explore our three dynamic options to elevate your business and
          outperform the competition.
        </p>

        {/* section1 */}
        <section className="px-16 py-8 mt-10 rounded-xl bg-primary-470">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-60 font-bold text-white text-center">
              Become a Featured Company
            </h2>
            <p className="text-16 font-normal text-white text-center">
              Stand out from the crowd as the featured company in your industry.
              You can choose to be the exclusive featured company or share the
              spotlight with just a few others. This option will ensure that
              your business gets the attention it deserves.
            </p>
            <div className="flex justify-center gap-x-3">
              <button className="px-6 py-2 bg-white text-primary-500 rounded-3xl mt-8">
                Exclusive Spotlight
              </button>
              <button className="px-6 py-2 text-white border-white border-2 rounded-3xl mt-8">
                Shared Spotlight (One Partner)
              </button>
              <button className="px-6 py-2 text-white border-white border-2 rounded-3xl mt-8">
                Shared Spotlight (Two Partners)
              </button>
            </div>
            <div className="bg-[#ABB5FD] relative w-full rounded-2xl mt-14 p-16">
              <div className="relative flex items-center justify-center">
                <Image src={laptop} alt="laptop" width={1000} height={1000} />
                <div className="bg-red-500 max-w-[35.5rem] h-[20.4rem] mx-auto absolute top-[5rem] flex flex-col items-center justify-center">
                  <Image
                    src={header}
                    alt="header"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-fill"
                  />
                  <Image
                    src={ss}
                    alt="picture"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
              <button className="bg-white w-20 h-20 rounded-full flex items-center justify-center absolute -right-10 bottom-16">
                <ArrowRight className="text-primary-500" size={50} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;

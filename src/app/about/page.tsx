import Image from "next/image";
import React from "react";
import img1 from '/public/images/docone.png'
import img3 from '/public/images/doctwo.png'
import img2 from '/public/images/docthree.png'

const page = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4 p-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image src={img1} alt="photo 1" className="w-full h-auto" />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image src={img2} alt="photo 1" className="w-full h-auto" />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image src={img3} alt="photo 1" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 p-4">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-semibold text-dark dark:text-white sm:text-[40px]/[48px]">
                  We Care For our customers health.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  providing the best servies and medical technology to improve the lifestyle of the people for sustainable livelyhood.
                </p>
                <a
                  href="/profile"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

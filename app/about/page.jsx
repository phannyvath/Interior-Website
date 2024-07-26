import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";

function page() {
  return (
    <div>
      <div className=" bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className=" container py-32 text-6xl font-semibold text-black tracking-widest text-center lg: py-64">
          Who we are ?
        </h1>
      </div>
      <div className=" container">
        <div className=" pt-4">
          <h2 className=" text-3xl font-semibold text-center lg:p-10 lg:text-5xl">
            We have great idea & Interior Design
          </h2>
          <p className=" text-2xl text-center font-medium pb-10 mt-5">
            Welcome to{" "}
            <span className=" text-orange-500 font-semibold">HOME AXIL</span>,
            where creativity meets functionality. Our passion for transforming
            spaces into beautiful, practical environments drives everything we
            do. With a keen eye for detail and a commitment to excellence, we
            specialize in creating personalized interior designs that reflect
            the unique tastes and needs of our clients.
          </p>
        </div>

        <div className=" items-center lg:flex gap-x-8">
          {/* Left Image Section */}
          <div className=" w-full">
            <Image src="/image/gallery1123.jpg" width={700} height={700} />
          </div>
          {/* Right Image Section */}
          <div>
            <p className=" pb-8 tracking-wide mt-6">
              At Home Axil, we believe that every space has the potential to
              inspire. Our vision is to craft interiors that not only look
              stunning but also enhance the well-being and lifestyle of those
              who inhabit them.
              <br />
              <br />
              We start by understanding your vision, preferences, and
              requirements. Our collaborative process ensures that your ideas
              are at the heart of the design. Using the latest design tools and
              techniques, we bring your vision to life, paying attention to
              every detail to ensure a seamless and stunning result.
              <br />
              <br />
              <span className=" text-xl font-extrabold tracking-tight">
                Let us help you create a space that reflects your personality
                and enhances your lifestyle. Contact us today to start your
                design journey with Home Axil
              </span>
            </p>
            <Button className=" inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Read More <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        {/* Team Section */}
        <div className=" lg:py-20">
          <div className=" pt-8 pb-4">
            <h1 className=" text-4xl font-bold tracking-wider text-center uppercase">
              Team
            </h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <div className="border-2 border-primary rounded-3xl">
              <div className="p-4 text-center bg-orange-500 h-auto w-auto dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3 hover:shadow-custom-orange rounded-3xl">
                <Image
                  src="/image/profile2.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
                />
                <h2 className="py-4 text-xl font-semibold uppercase sm:text-2xl">
                  Building Surveys
                </h2>
                <p className="text-sm sm:text-base">
                  Experience: With years of experience in the industry, we have
                  a proven track record of delivering exceptional designs.
                </p>
              </div>
            </div>

            {/* SECOND Image */}

            <div className="border-2 border-primary rounded-3xl">
              <div className="p-4 text-center bg-orange-500 h-auto w-auto dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3 hover:shadow-custom-orange rounded-3xl">
                <Image
                  src="/image/profile1.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
                />
                <h2 className="py-4 text-xl font-semibold uppercase sm:text-2xl">
                  Building Surveys
                </h2>
                <p className="text-sm sm:text-base">
                  Experience: With years of experience in the industry, we have
                  a proven track record of delivering exceptional designs.
                </p>
              </div>
            </div>

            {/* Third Image */}
            <div className="border-2 border-primary rounded-3xl">
              <div className="p-4 text-center bg-orange-500 h-auto w-auto dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3 hover:shadow-custom-orange rounded-3xl">
                <Image
                  src="/image/profile3.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
                />
                <h2 className="py-4 text-xl font-semibold uppercase sm:text-2xl">
                  Building Surveys
                </h2>
                <p className="text-sm sm:text-base">
                  Experience: With years of experience in the industry, we have
                  a proven track record of delivering exceptional designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

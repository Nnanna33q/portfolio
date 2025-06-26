import { motion } from "framer-motion";
import { FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-[38px] pt-[200px] pb-[75px] md:px-[26px] sm:pt-[200px] lg:pb-[50px] lg:pl-[80px] lg:pr-[40px]">
        <div className="flex flex-col items-start flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:gap-x-12 lg:justify-center text-center">
          <div className="w-full flex flex-col gap-y-4 lg:gap-y-3">
            <div className="gradientText flex justify-center items-center">
              <h1 className="text-center text-secondary dark:text-[#CFFAFF]">
                Web Developer
              </h1>
            </div>
            <p className="gradientText font-medium font-pop text-[17px] text-secondary dark:text-[#FFFFFF99] max-w-[full] md:mt-8 lg:mt-1 md:max-w-[full] md:text-[24px] leading-md:[27px]">
              Build a powerful online presence. I develop fast, secure, and user-friendly websites tailored for your business success
            </p>
            <div className="md:mt-[16px] flex justify-center items-center  gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://www.facebook.com/honour.robinson.1"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className="h-auto w-auto"
              >
                <FbIcon
                  fill="#137BED"
                  className={`w-[30px] h-[30px] rounded-full border-[#137BED] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://x.com/honour_can_code"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TwIcon
                  fill={`#137BED`}
                  className={`w-[30px] h-[30px] rounded-full border-[#137BED] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/robinsonhonour"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <IgIcon
                  fill={`#137BED`}
                  className={`w-[30px] h-[30px] rounded-full border-[#137BED] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://ng.linkedin.com/in/robinsonhonouramadi"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  fill={`#137BED`}
                  className={`w-[30px] h-[30px] rounded-full border-[#137BED] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}
                />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

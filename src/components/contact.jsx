import { useState, useEffect } from "react";
import { LocationIcon, MailIcon, PhoneIcon } from "./svgs";
import isDarkMode from "../data/darkMode";

const Contact = () => {
  return (
    <section className="mx-[30px] lg:mx-[76px] lg:mt-[150px]">
      <div className="flex flex-col items-center gap-[35px] md:gap-[25px]">
        <h3
          className={`font-medium text-[#0b040c99] dark:text-[#FFFFFF99] text-lg text-center max-w-[320px] md:max-w-[992px] md:text-[28px] mmd:leading-[37.5px]`}
        >
          Need to design, improve, or build your product's experience? I'm here to help. Get in touch!
        </h3>
      </div>
      <div
        className={`mt-[51px] flex gap-[60px] lg:flex lg:flex-row items-center justify-center`}
      >
        <div className="flex flex-col items-center gap-[10px]">
          <a
            className={`text-accent font-medium text-base md:text-[20px] md:leading-[30px]`}
            href="mailto:codewithhonour@gmail.com"
          >
            <div className="border border-accent/60 dark:border-accent/50 bg-primary dark:bg-secondary rounded-sm pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
              <MailIcon
                fill={'#137BED'}
                className={`w-[50px] h-[50px] p-2 md:p-[10px] md:w-[75px] md:h-[75px]`}
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <a
            className={`text-accent font-medium text-base md:text-[20px] md:leading-[30px]`}
            href="mailto:codewithhonour@gmail.com"
          >
            <div className="border border-accent/60 dark:border-accent/50 bg-primary dark:bg-secondary rounded-sm pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
              <PhoneIcon
                fill={'#137BED'}
                className={`w-[50px] h-[50px] p-2 md:p-[10px] md:w-[75px] md:h-[75px]`}
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <a
            className={`text-accent text-base mx-auto text-center font-medium md:text-[20px] md:leading-[30px]`}
          >
            <div className="border border-accent/60 dark:border-accent/50 bg-primary dark:bg-secondary rounded-sm pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
              <LocationIcon
                fill={'#137BED'}
                className={`w-[50px] h-[50px] p-2 md:p-[10px] md:w-[75px] md:h-[75px]`}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

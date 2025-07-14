import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Copyright, Discord, MailIcon, TwIcon, FbIcon, IgIcon } from "./svgs";
import isDarkMode from "../data/darkMode";

const Footer = () => {
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };

    updateTime(); // Initial call
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Return empty time string during server-side rendering
  const displayTime = mounted ? time : '';

  return (
    <section className="mx-[30px] mt-[60px] pb-[20px] lg:pb-[50px] lg:mx-[76px] lg:mt-[150px]">
      <div className="lg:max-w-[13000px] lg:mx-[71px] h-[2px] mt-[63.37px] bg-[#0b040c99] dark:bg-[#FFFFFF99]"></div>
      <div className="mt-[63px] flex flex-col-reverse justify-start gap-5 md:gap-0 md:flex md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-row items-center lg:gap-[4px]">
            <span>
              <Copyright
                fill={isDarkMode() ? 'white' : '#0b040c'}
                className="size-[18px] md:size-[20px]" />
            </span>
            <p className={`text-[#0b040c99] dark:text-[#FFFFFF99] md:text-xl text-lg font-medium`}>
              Camillus
              <span className="text-secondary dark:text-[#FFFFFF] text-[14px] lg:text-base">
                {" "}

              </span>{" "}
              <span className="text-secondary dark:text-[#FFFFFF] text-[14px] lg:text-base">
                {new Date().getFullYear()}
              </span>
            </p>
          </div>
          <p className="text-[#0b040c99] dark:text-[#FFFFFF99] transition-all duration-300 text-end text-sm lg:text-base mt-1">
            {displayTime}
          </p>
        </div>
        <div className="mt-[10px] md:mt-[65px] flex justify-evenly items-center gap-[20px] md:gap-[40px]">
          <motion.a
            href="mailto:camillus@camilluscodes.com"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <MailIcon
              fill={isDarkMode() ? `#FFFFFF99` : '#0b040c99'}
              className={`w-[30px] h-[30px] rounded-full border-[#0b040c99] dark:border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=61577904460717"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <FbIcon
              fill={isDarkMode() ? `#FFFFFF99` : '#0b040c99'}
              className={`w-[30px] h-[30px] rounded-full border-[#0b040c99] dark:border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/camillus_codes?igsh=c2ZsYzRtb2szbmZj"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <IgIcon
              fill={isDarkMode() ? `#FFFFFF99` : '#0b040c99'}
              className={`w-[30px] h-[30px] rounded-full border-[#0b040c99] dark:border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://x.com/camilluscodes"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <TwIcon
              fill={isDarkMode() ? `#FFFFFF99` : '#0b040c99'}
              className={`w-[30px] h-[30px] rounded-full border-[#0b040c99] dark:border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://discordapp.com/users/1387975080109408359"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <Discord
              fill={isDarkMode() ? `#FFFFFF99` : '#0b040c99'}
              className={`w-[30px] h-[30px] rounded-full border-[#0b040c99] dark:border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
        </div>
      </div>


    </section>
  );
};

export default Footer;

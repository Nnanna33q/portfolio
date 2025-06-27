import { motion } from "framer-motion";
import { MailIcon, Discord, TwIcon } from "./svgs";

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
        className={`hidden lg:block mt-[51px] flex gap-[60px] lg:flex lg:flex-row items-center justify-center`}
      >
        <motion.a
          href="mailto:camilluscodes@gmail.com"
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 0.99 }}
          className="h-auto w-auto"
        >
          <MailIcon
            fill="#137BED"
            className={`w-30px] h-[30px] rounded-full border-[#137BED] border-solid border-[2px] p-1 transition-all duration-500 hover:bg-white`}
          />
        </motion.a>
        <motion.a
          href="https://x.com/camilluscodes"
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
          href="https://discordapp.com/users/1387975080109408359"
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 0.99 }}
          className={`h-auto w-auto`}
        >
          <Discord
            fill={`#137BED`}
            className={`w-[30px] h-[30px] rounded-full border-[#137BED] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-white`}
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;

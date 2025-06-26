import clsx from "clsx";
import Bars from "./bars";
import { useState } from "react";
import MobileNavbar from "./mobileNavbar";
import { AnimatePresence } from "framer-motion";

const Navbar = ({ currentPage }) => {
    const [isMobileNavbar, setIsMobileNavbar] = useState(false);

    return (
        <>
            <main className="">
                <header
                    className={clsx(
                        "navbar-container fixed z-40 top-0 md:relatives dark:bg-[#0b040c]/90 bg-[#ffffff]/90 pb-3 w-full pt-[20px] px-[32px] md:py-[30px] lg:px-[80px]"
                    )}
                >
                    <nav className="flex items-center justify-between">
                        <a href="/">
                            <div
                                className={`before:content-[''] font-clashbold font-semibold text-[18px] md:text-[25px] lg:hover:before:bg-[#4C686F]s active:scale-[0.86] transition-all duration-100 before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 text-secondary dark:text-white hover:before:w-full relative`}
                            >
                                Honour<span>!</span>
                                <span>⚡</span>
                            </div>
                        </a>
                        <div className="hidden lg:flex gap-x-8 items-center">
                            <a className="font-clashbold font-semibold text-[18px] md:text-[25px]" href="/">
                                Home
                                {currentPage === 'Home' &&
                                    <div className="flex justify-center">
                                        <div className="h-1 w-14 bg-gradient-to-r from-accent to-accent-secondary" />
                                    </div>}
                            </a>
                            <a className="font-clashbold font-semibold text-[18px] md:text-[25px] flex" href="/projects">
                                Projects
                                {currentPage === 'Projects' &&
                                    <div className="flex justify-center">
                                        <div className="h-1 w-14 bg-gradient-to-r from-accent to-accent-secondary" />
                                    </div>}
                            </a>
                        </div>
                        <a className="hidden lg:block font-clashbold font-semibold text-[18px] md:text-[25px]" href="/contact">
                            Contact
                            {currentPage === 'Contact' &&
                                <div className="flex justify-center">
                                    <div className="h-1 w-14 bg-gradient-to-r from-accent to-accent-secondary" />
                                </div>}
                        </a>
                        <div className="lg:hidden"><Bars isMobileNavbar={isMobileNavbar} setIsMobileNavbar={setIsMobileNavbar} /></div>
                    </nav>
                </header>
                <AnimatePresence>
                    {isMobileNavbar && <MobileNavbar currentPage={currentPage} />}
                </AnimatePresence>
            </main>
        </>
    );
};

export default Navbar;

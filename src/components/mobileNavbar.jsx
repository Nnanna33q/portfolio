import { motion } from "framer-motion";
import { useRef } from "react";

export default function MobileNavbar({ currentPage }) {
    const navbarHeightRef = useRef(document.querySelector('.navbar-container').clientHeight);
    
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ bounce: 0, duration: 0.3, animationTimingFunction: 'ease-in-out' }}
            exit={{ x: '-100vw' }}
            className={`mobile-nav-container bg-primary dark:bg-secondary overflow-hidden z-100`}
            style={{ width: '100vw', height: `calc(100vh - ${navbarHeightRef.current}px)`, position: 'fixed', top: `${navbarHeightRef.current}px`, left: 0 }}>
            <ul className="flex flex-col justify-evenly items-center text-secondary dark:text-primary h-full">
                <li>
                    <a href="index.html" className="text-2xl md:text-3xl font-clashbold">Home</a>
                    {currentPage === 'Home' &&
                        <div className="flex justify-center">
                            <div className="h-1 w-14 bg-gradient-to-r from-accent to-accent-secondary" />
                        </div>}
                </li>
                <li>
                    <a href="/projects.html" className="text-2xl md:text-3xl font-clashbold">Projects</a>
                    {currentPage === 'Projects' &&
                        <div className="flex justify-center">
                            <div className="h-1 w-14 bg-gradient-to-r from-accent to-accent-secondary" />
                        </div>}
                </li>
                <li>
                    <a href="/contact.html" className="text-2xl md:text-3xl font-clashbold">Contact</a>
                    {currentPage === 'Contact' &&
                        <div className="flex justify-center">
                            <div className="h-1 w-14 bg-gradient-to-r from-accent to-accent-secondary" />
                        </div>}
                </li>
            </ul>
        </motion.div>
    )
}
import { motion } from "framer-motion";
import {
    Palette,
    Code,
    Server
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: "FRONTEND DEVELOPMENT",
        description: "Building responsive, interactive websites and web applications with React, Node.js, and Tailwind CSS. I prioritize modern UI/UX and optimal performance",
        icon: Code,
        category: "Development"
    },
    {
        id: 2,
        title: "BACKEND DEVELOPMENT",
        description: "I also specialize in robust backend development. Leveraging Node.js, Express.js and database technologies such as MongoDB, I will ensure your server-side applications and APIs are both scalable and secure.",
        icon: Server,
        category: "Development"
    },
    {
        id: 5,
        title: "UI DESIGN",
        description: "Designing intuitive, visually stunning user interfaces. I focus on user-centered principles and modern design trends to create engaging experiences.",
        icon: Palette,
        category: "Design"
    }
];


const Services = () => {
    // #130b1c
    return (
        <section className="relative pb-24 pt-30 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 " />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <h1 className="text-2xl md:text-3xl font-clashbold text-secondary dark:text-white mb-6 tracking-tight">
                        Services
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🔥</span>
                    </h1>
                    <div className="flex justify-center">
                        <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-secondary mb-6" />
                    </div>
                    <p className="text-[#0b040c99] dark:text-[#FFFFFF99] text-base md:text-l ">
                        Proficient in both frontend and backend engineering
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: service.id * 0.05 }}

                            whileHover={{
                                scale: 1.02,
                                translateY: -5,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                            }}
                            className="group relative bg-[#02121A] dark:bg-[#40B8F5]/10 backdrop-blur-lg rounded-lg overflow-hidden border border-[#0b040c10] dark:border-[#ffffff10]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#137BED]/10 to-[#13C0ED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                                    </span>
                                    <div className="h-px w-16 bg-gradient-to-r from-accent to-accent-secondary opacity-50" />
                                </div>

                                <h3 className="text-white text-xl  font-clashbold mb-4 tracking-wide">
                                    {service.title}
                                </h3>

                                <p className="text-[#FFFFFF99] text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="h-[2px] w-full bg-gradient-to-r from-accent to-accent-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

import { motion } from "framer-motion";
import { skills } from "../data/data";

const Skills = () => {


    return (
        <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-light dark:from-accent-dark to-transparent opacity-30" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-accent text-sm tracking-[0.2em] uppercase mb-4 block font-medium">Expertise</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-accent dark:text-white mb-6 tracking-tight">
                        Technical Proficiency
                    </h2>
                    <div className="flex justify-center items-center"><div className="h-[1px] w-16 bg-accent opacity-50 mb-8" /></div>
                    <div className="flex justify-center">
                        <p className="text-secondary dark:text-[#FFFFFF99] text-lg max-w-2xl font-light leading-relaxed">A comprehensive toolkit refined through years of practical experience</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02
                            }}
                            className="group relative bg-accent-dark backdrop-blur-sm border border-[#ffffff08] p-6 transition-all duration-300"
                        >
                            <div className="relative z-10">
                                <p className="text-white font-medium tracking-wide mb-2 text-center">
                                    {skill.title}
                                </p>
                                <div className="flex justify-center">
                                    <div className="h-[1px] w-8 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import { Arrow } from "./svgs";
import { motion } from "framer-motion";
import { projects } from "../data/data";

const Projects = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-light dark:from-accent-dark to-transparent opacity-40" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <h2 className="text-2xl md:text-3xl font-clashbold text-secondary dark:text-white mb-6 tracking-tight">
                        Projects
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🚀</span>
                    </h2>
                    <div className="flex justify-center"><div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-secondary mb-6" /></div>
                    <p className="text-[#FFFFFF99] text-base md:text-l ">
                        Showcasing my latest works and experiments in tech
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group relative bg-[#02121A] dark:bg-[#40B8F5]/10 backdrop-blur-lg rounded-lg overflow-hidden border border-[#ffffff10]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#137BED]/10 to-[#13C0ED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 flex flex-col h-full">
                                <h3 className="text-white text-2xl font-clashbold mb-3">
                                    {project.name}
                                </h3>

                                <p className="text-accent text-sm font-medium mb-4">
                                    {project.lang}
                                </p>

                                <p className="text-[#FFFFFF99] text-sm flex-grow">
                                    {project.desc}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center group/link"
                                >
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3 text-white hover:text-accent transition-colors"
                                    >
                                        <span className="text-sm font-medium">View Project</span>
                                        <Arrow className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                    </motion.div>
                                </a>

                                <div className="h-[2px] w-full bg-gradient-to-r from-accent to-accent-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute bottom-0 left-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

import { motion } from "framer-motion";
import data from "../../Data/data.json";
import ProminentProjectCard from "../Secondary/ProminentProjectCard";
import SecondaryProjectCard from "../Secondary/SecondaryProjectCard";

function Projects() {
    const { projects } = data;

    const priorityProjects = projects.filter((project) => project.priority);
    const secondaryProjects = projects.filter((project) => !project.priority);

    return (
        <motion.section
            id="Projects"
            className="bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6 py-24"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="mx-auto max-w-6xl">

                <div className="mb-12">
                    <p className="font-mono text-sm text-[#b5650a] dark:text-[#f5a623]">
                        02 / Projects
                    </p>

                    <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                        Things I've Built
                    </h1>

                </div>

                {priorityProjects.length > 0 && (
                    <section>
                        <div className="mb-4">
                            <p className="font-mono text-xs uppercase tracking-wider text-[#8a7a4e] dark:text-[#8b86a3]">
                                Featured Projects
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {priorityProjects.map((project) => (
                                <ProminentProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {secondaryProjects.length > 0 && (
                    <section className="mt-12">
                        <div className="mb-4">
                            <p className="font-mono text-xs uppercase tracking-wider text-[#8a7a4e] dark:text-[#8b86a3]">
                                Other Projects
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {secondaryProjects.map((project) => (
                                <SecondaryProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </motion.section>
    );
}

export default Projects;
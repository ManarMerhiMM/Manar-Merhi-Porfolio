import { motion } from "framer-motion";
import data from "../../Data/data.json";
import CertificationCard from "../Secondary/CertificationCard";

function Certifications() {
    const { certifications } = data;

    return (
        <motion.section
            id="Certifications"
            className="min-h-screen bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6 py-24"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="mx-auto max-w-6xl">

                <div className="mb-12">
                    <p className="font-mono text-sm text-[#b5650a] dark:text-[#f5a623]">
                       04 / Certifications
                    </p>

                    <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                        Continuous Learning
                    </h1>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {certifications.map((certification) => (
                        <CertificationCard
                            key={certification.id}
                            certification={certification}
                        />
                    ))}
                </div>

            </div>
        </motion.section>
    );
}

export default Certifications;
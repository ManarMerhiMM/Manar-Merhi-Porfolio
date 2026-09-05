import { motion } from "framer-motion";
import data from "../../Data/data.json";
import ProminentEducationCard from "../Secondary/ProminentEducationCard";
import SecondaryEducationCard from "../Secondary/SecondaryEducationCard";

function Education() {
    const { schools, tests, languages } = data.education;

    return (
        <motion.section
            id="Education"
            className="bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6 py-24"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="mx-auto max-w-6xl">

                {/* Section heading */}
                <div className="mb-12">
                    <p className="font-mono text-sm text-[#b5650a] dark:text-[#f5a623]">
                        03 / Education
                    </p>

                    <h2 className="mt-2 text-4xl md:text-5xl font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                        Academic Journey
                    </h2>
                </div>

                {/* Schools */}
                <div className="flex flex-col gap-6">
                    {schools.map((school, index) => {
                        if (index === 0) {
                            return (
                                <ProminentEducationCard
                                    key={school.id}
                                    title={school.school}
                                    subtitle={school.degree}
                                    period={`${school.startYear} — ${school.endYear}`}
                                    score={school.grade}
                                    scoreOver={school.over}
                                    honors={school.honors}
                                />
                            );
                        }

                        return (
                            <SecondaryEducationCard
                                key={school.id}
                                title={school.school}
                                subtitle={school.degree}
                                period={`${school.startYear} — ${school.endYear}`}
                                score={school.grade}
                                scoreOver={school.over}
                                honors={school.honors}
                            />
                        );
                    })}
                </div>

                {/* Standardized Tests */}
                <div className="mt-12">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[#8a7a4e] dark:text-[#8b86a3]">
                        Standardized Tests
                    </h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {tests.map((test) => (
                            <SecondaryEducationCard
                                key={test.id}
                                title={test.name}
                                period={test.taken}
                                score={test.score}
                                scoreOver={test.over}
                            />
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div className="mt-12">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[#8a7a4e] dark:text-[#8b86a3]">
                        Languages
                    </h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {languages.map((language) => (
                            <SecondaryEducationCard
                                key={language.id}
                                title={language.name}
                                subtitle={language.proficiency}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </motion.section>
    );
}

export default Education;
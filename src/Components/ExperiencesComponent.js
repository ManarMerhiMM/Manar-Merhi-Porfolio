import data from "../Data/data.json";
import ProminentExperienceCard from "./ProminentExperienceCard";
import SecondaryExperienceCard from "./SecondaryExperienceCard";

function ExperiencesComponent() {
    const { experiences } = data;

    return (
        <main className="bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="font-mono text-sm text-[#b5650a] dark:text-[#f5a623]">
                       Experiences
                    </p>

                    <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                        Professional Journey
                    </h1>
                </div>

                <div className="flex flex-col gap-6">
                    {experiences.map((experience, index) => {
                        if (index === 0) {
                            return (
                                <ProminentExperienceCard
                                    key={experience.id}
                                    experience={experience}
                                />
                            );
                        }

                        return (
                            <SecondaryExperienceCard
                                key={experience.id}
                                experience={experience}
                            />
                        );
                    })}
                </div>

            </div>
        </main>
    );
}

export default ExperiencesComponent;
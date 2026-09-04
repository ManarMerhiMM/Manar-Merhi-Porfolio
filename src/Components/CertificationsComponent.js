import data from "../Data/data.json";
import CertificationCard from "./CertificationCard";

function Certifications() {
    const { certifications } = data;

    return (
        <main className="min-h-screen bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6 py-24">
            <div className="mx-auto max-w-6xl">

                <div className="mb-12">
                    <p className="font-mono text-sm text-[#b5650a] dark:text-[#f5a623]">
                        Certifications
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
        </main>
    );
}

export default Certifications;
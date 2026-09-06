function SecondaryExperienceCard({ experience }) {
    const {
        company,
        role,
        type,
        location,
        startDate,
        endDate,
        description,
        skills = [],
    } = experience;

    const tagColors = [
        "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20",
        "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-400/20",
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/20",
        "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-400/20",
        "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-400/20",
        "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-400/20",
    ];

    return (
        <article className="rounded-lg border border-[#c9b989] dark:border-[#332f47] bg-[#f2dfa8] dark:bg-[#28243a] p-5 md:p-6">

            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-[#b5650a] dark:text-[#f5a623]">
                            {type}
                        </span>

                        <span className="text-[#8a7a4e] dark:text-[#8b86a3]">
                            •
                        </span>

                        <span className="font-mono text-xs text-[#8a7a4e] dark:text-[#8b86a3]">
                            {location}
                        </span>
                    </div>

                    <h3 className="mt-2 text-xl font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                        {role}
                    </h3>

                    <p className="mt-1 text-sm text-[#4a4022] dark:text-[#c9c4dc]">
                        {company}
                    </p>
                </div>

                <div className="shrink-0 md:text-right">
                    <p className="font-mono text-xs text-[#8a7a4e] dark:text-[#8b86a3]">
                        {startDate} — {endDate}
                    </p>
                </div>

            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#4a4022] dark:text-[#c9c4dc]">
                {description}
            </p>

            {skills.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={skill}
                            className={`
                                rounded-md border px-2.5 py-1
                                font-mono text-[11px] font-medium
                                transition-all duration-200
                                hover:-translate-y-0.5 hover:shadow-sm
                                ${tagColors[index % tagColors.length]}
                            `}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            )}

        </article>
    );
}

export default SecondaryExperienceCard;
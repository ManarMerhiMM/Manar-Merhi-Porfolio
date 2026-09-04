function ProminentProjectCard({ project }) {
    const {
        title,
        description,
        skills = [],
        url,
        startDate,
        endDate,
    } = project;

    const tagColors = [
        "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20",
        "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-400/20",
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/20",
        "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-400/20",
        "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-400/20",
        "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-400/20",
    ];

    return (
        <article className="rounded-xl border border-[#c9b989] dark:border-[#332f47] bg-[#fdedb0] dark:bg-[#221f33] p-6 md:p-8 shadow-sm">

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                <div>
                    <p className="font-mono text-sm text-[#8a7a4e] dark:text-[#8b86a3]">
                        {startDate} — {endDate}
                    </p>

                    <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                        {title}
                    </h2>
                </div>

            </div>

            <div className="mt-8 border-t border-[#c9b989] dark:border-[#332f47] pt-6">
                <p className="max-w-4xl text-base leading-relaxed text-[#4a4022] dark:text-[#c9c4dc]">
                    {description}
                </p>
            </div>

            {skills.length > 0 && (
                <div className="mt-8">
                    <div className="mt-4 flex flex-wrap gap-2.5">
                        {skills.map((skill, index) => (
                            <span
                                key={skill}
                                className={`
                                    rounded-lg border px-3 py-1.5
                                    font-mono text-xs font-medium
                                    transition-all duration-200
                                    hover:-translate-y-0.5 hover:shadow-sm
                                    ${tagColors[index % tagColors.length]}
                                `}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}


            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                        inline-flex w-fit shrink-0 items-center gap-2
                        rounded-lg
                        bg-[#b5650a] dark:bg-[#f5a623]
                        px-4 py-2.5
                        text-sm font-semibold
                        text-white dark:text-[#1e1b2e]
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:shadow-md
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#e8951f]
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-[#fdedb0]
                        dark:focus-visible:ring-offset-[#221f33]
                        mt-6
                    "
            >
                Learn More
                <span aria-hidden="true">↗</span>
            </a>
        </article>
    );
}

export default ProminentProjectCard;
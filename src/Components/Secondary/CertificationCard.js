function CertificationCard({ certification }) {
    const {
        name,
        company,
        date,
        skills,
        url,
    } = certification;

    const tagColors = [
        "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20",
        "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-400/20",
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-400/20",
        "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-400/20",
        "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-400/20",
        "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-400/20",
    ];

    return (
        <article className="group flex h-full flex-col rounded-lg border border-[#c9b989] dark:border-[#332f47] bg-[#f2dfa8] dark:bg-[#28243a] p-5 md:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm">

            <div className="flex flex-1 items-stretch gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdedb0] dark:bg-[#221f33] text-[#b5650a] dark:text-[#f5a623] border border-[#c9b989] dark:border-[#3b3652]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 15l-3.5 2 1-4-3-2.5 4-.25L12 6.5l1.5 3.75 4 .25-3 2.5 1 4L12 15z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 20h12"
                        />
                    </svg>
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">

                        <div>
                            <p className="font-mono text-xs text-[#b5650a] dark:text-[#f5a623]">
                                {company}
                            </p>

                            <h3 className="mt-1 text-lg font-semibold leading-snug text-[#241f14] dark:text-[#f5f0e8]">
                                {name}
                            </h3>
                        </div>

                        <span className="shrink-0 font-mono text-xs text-[#8a7a4e] dark:text-[#8b86a3]">
                            {date}
                        </span>

                    </div>

                    {skills.length > 0 && (
                        <div className="mt-3 mb-6 flex flex-wrap gap-1.5">
                            {skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className={`
                                        rounded-full border px-2.5 py-0.5
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

                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-flex w-fit items-center gap-1 font-mono text-xs text-[#b5650a] dark:text-[#f5a623] underline underline-offset-2 hover:text-[#8a4d07] dark:hover:text-[#e6981a] transition-colors"
                        >
                            View credential
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-3 w-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                                />
                            </svg>
                        </a>
                    )}

                </div>

            </div>

        </article>
    );
}

export default CertificationCard;
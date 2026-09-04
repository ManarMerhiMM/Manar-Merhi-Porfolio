function CertificationCard({ certification }) {
    const {
        name,
        company,
        date,
    } = certification;

    return (
        <article className="group rounded-lg border border-[#c9b989] dark:border-[#332f47] bg-[#f2dfa8] dark:bg-[#28243a] p-5 md:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm">

            <div className="flex items-start gap-4">

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

                <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">

                        <div>
                            <p className="font-mono text-xs text-[#b5650a] dark:text-[#f5a623]">
                                {company}
                            </p>

                            <h2 className="mt-1 text-lg font-semibold leading-snug text-[#241f14] dark:text-[#f5f0e8]">
                                {name}
                            </h2>
                        </div>

                        <span className="shrink-0 font-mono text-xs text-[#8a7a4e] dark:text-[#8b86a3]">
                            {date}
                        </span>

                    </div>
                </div>

            </div>

        </article>
    );
}

export default CertificationCard;
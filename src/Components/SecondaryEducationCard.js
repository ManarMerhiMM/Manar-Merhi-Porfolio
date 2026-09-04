function SecondaryEducationCard(props) {
    const {
        title,
        subtitle,
        period,
        score,
        scoreOver,
        honors = [],
    } = props;

    return (
        <article className="rounded-lg border border-[#c9b989] dark:border-[#332f47] bg-[#f2dfa8] dark:bg-[#28243a] p-5">

            <div className="flex items-start justify-between gap-4">

                <div>
                    {period && (
                        <p className="font-mono text-xs text-[#8a7a4e] dark:text-[#8b86a3]">
                            {period}
                        </p>
                    )}

                    <h3 className="mt-1 text-lg font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                        {title}
                    </h3>

                    {subtitle && (
                        <p className="mt-1 text-sm text-[#4a4022] dark:text-[#c9c4dc]">
                            {subtitle}
                        </p>
                    )}
                </div>

                {score !== undefined && (
                    <div className="shrink-0 text-right">

                        <p className="font-mono text-lg font-semibold text-[#b5650a] dark:text-[#f5a623]">
                            {score}
                            <span className="text-xs text-[#8a7a4e] dark:text-[#8b86a3]">
                                {" "}
                                / {scoreOver}
                            </span>
                        </p>
                    </div>
                )}

            </div>

            {honors.length > 0 && (
                <div className="mt-4 border-t border-[#c9b989] dark:border-[#332f47] pt-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-[#8a7a4e] dark:text-[#8b86a3]">
                        Honors
                    </p>

                    <div className="mt-2 flex flex-col gap-1">
                        {honors.map((honor) => (
                            <p
                                key={honor}
                                className="text-sm font-medium text-[#4a4022] dark:text-[#c9c4dc]"
                            >
                                ★ {honor}
                            </p>
                        ))}
                    </div>
                </div>
            )}

        </article>
    );
}

export default SecondaryEducationCard;
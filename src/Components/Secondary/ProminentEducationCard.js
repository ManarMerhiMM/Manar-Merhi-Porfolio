function ProminentEducationCard(props) {
    const {
        title,
        subtitle,
        period,
        score,
        scoreOver,
        honors = [],
    } = props;

    return (
        <article className="rounded-xl border border-[#c9b989] dark:border-[#332f47] bg-[#fdedb0] dark:bg-[#221f33] p-6 md:p-8 shadow-sm">

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                <div>
                    <p className="font-mono text-sm text-[#8a7a4e] dark:text-[#8b86a3]">
                        {period}
                    </p>

                    <h3 className="mt-2 text-2xl md:text-4xl font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                        {title}
                    </h3>

                    <p className="mt-2 text-base md:text-lg text-[#4a4022] dark:text-[#c9c4dc]">
                        {subtitle}
                    </p>
                </div>

                <div className="md:text-right">
                    <span className="font-mono text-1xl md:text-2xl font-semibold text-[#b5650a] dark:text-[#f5a623]">
                        {score}
                    </span>

                    <span className="ml-1 font-mono text-sm text-[#8a7a4e] dark:text-[#8b86a3]">
                        / {scoreOver}
                    </span>
                </div>

            </div>

            {honors.length > 0 && (
                <div className="mt-8 border-t border-[#c9b989] dark:border-[#332f47] pt-5">
                    <p className="font-mono text-xs uppercase tracking-wider text-[#8a7a4e] dark:text-[#8b86a3]">
                        Honors
                    </p>

                    <div className="mt-3 flex flex-col gap-2">
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

export default ProminentEducationCard;
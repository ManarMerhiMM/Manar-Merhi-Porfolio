function ContactCard({ icon, label, value, href }) {
    return (
        <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="
                group flex items-center gap-4
                rounded-lg border border-[#c9b989] dark:border-[#332f47]
                bg-[#f2dfa8] dark:bg-[#28243a]
                p-5 md:p-6
                transition-all duration-200
                hover:-translate-y-1 hover:shadow-sm
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#b5650a]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#f2dfa8]
                dark:focus-visible:ring-offset-[#28243a]
            "
        >
            <div
                className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-lg
                    bg-[#fdedb0] dark:bg-[#221f33]
                    text-[#b5650a] dark:text-[#f5a623]
                    border border-[#c9b989] dark:border-[#3b3652]
                "
            >
                {icon}
            </div>

            <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase tracking-wider text-[#8a7a4e] dark:text-[#8b86a3]">
                    {label}
                </p>

                <p className="mt-1 truncate text-base font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                    {value}
                </p>
            </div>

            <span
                aria-hidden="true"
                className="
                    shrink-0 text-[#8a7a4e] dark:text-[#8b86a3]
                    transition-all duration-200
                    group-hover:translate-x-0.5 group-hover:text-[#b5650a] dark:group-hover:text-[#f5a623]
                "
            >
                ↗
            </span>
        </a>
    );
}

export default ContactCard;
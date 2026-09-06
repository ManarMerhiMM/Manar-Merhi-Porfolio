import { useState } from "react";
import data from "../../Data/data.json";

const icons = {
    mail: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
        </svg>
    ),

    phone: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 4h3l1.5 4.5-2 1.5a11 11 0 006 6l1.5-2L19 15v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"
            />
        </svg>
    ),

    check: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    ),

    download: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0l-4-4m4 4l4-4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14" />
        </svg>
    ),

    github: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.66.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
        </svg>
    ),

    linkedin: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4z" />
        </svg>
    ),

    instagram: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
    ),
};

async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function Footer() {
    const { basicInfo } = data;
    const { name, title, tagline, socials, resume } = basicInfo;
    const [copiedKey, setCopiedKey] = useState(null);

    const contactItems = [
        {
            key: "email",
            icon: icons.mail,
            label: socials.email,
            value: socials.email,
        },
        {
            key: "phone",
            icon: icons.phone,
            label: `${socials.phone.flag} ${socials.phone.code} ${socials.phone.number}`,
            value: `${socials.phone.code}${socials.phone.number}`,
        },
    ];

    const socialLinks = [
        { icon: icons.github, href: socials.github, label: "GitHub" },
        { icon: icons.linkedin, href: socials.linkedin, label: "LinkedIn" },
        { icon: icons.instagram, href: socials.instagram, label: "Instagram" },
    ];

    const handleCopy = async (key, value) => {
        try {
            await copyToClipboard(value);
            setCopiedKey(key);
            setTimeout(() => {
                setCopiedKey((current) => (current === key ? null : current));
            }, 2000);
        } catch (err) {
        }
    };

    return (
        <footer className="border-t border-[#ddd6c2] bg-[#f2e3b5] dark:border-[#332f47] dark:bg-[#28243a]">

            <div className="mx-auto max-w-6xl px-6 py-12">

                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">


                    <div className="min-w-0 max-w-sm">
                        <h2 className="break-words font-['Twinkle_Star'] text-3xl font-bold leading-none text-[#29261f] dark:text-[#f5f0e8]">
                            {name}
                        </h2>

                        <p className="mt-4 break-words text-sm font-medium text-[#4a453b] dark:text-[#c9c4dc]">
                            {title}
                        </p>

                        <p className="mt-2 break-words text-sm leading-relaxed text-[#827b6b] dark:text-[#8b86a3]">
                            {tagline}
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="font-mono text-xs uppercase tracking-wider text-[#827b6b] dark:text-[#8b86a3]">
                            Contact
                        </p>

                        <div className="mt-4 flex flex-col gap-2">
                            {contactItems.map(({ key, icon, label, value }) => {
                                const copied = copiedKey === key;

                                return (
                                    <button
                                        key={key}
                                        type="button"
                                        onClick={() => handleCopy(key, value)}
                                        aria-label={`Copy ${label} to clipboard`}
                                        className="
                                            flex items-center gap-2
                                            break-all text-left text-sm
                                            text-[#4a453b] dark:text-[#c9c4dc]
                                            transition-colors duration-200
                                            hover:text-[#b5650a] dark:hover:text-[#f5a623]
                                        "
                                    >
                                        <span
                                            className={`shrink-0 transition-colors duration-200 ${copied ? "text-[#1f9d55] dark:text-[#4ade80]" : ""
                                                }`}
                                        >
                                            {copied ? icons.check : icon}
                                        </span>
                                        <span
                                            className={copied ? "text-[#1f9d55] dark:text-[#4ade80]" : ""}
                                        >
                                            {copied ? "Copied to clipboard!" : label}
                                        </span>
                                    </button>
                                );
                            })}

                            {resume && (
                                <a
                                    href={resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex items-center gap-2
                                        text-sm
                                        text-[#4a453b] dark:text-[#c9c4dc]
                                        transition-colors duration-200
                                        hover:text-[#b5650a] dark:hover:text-[#f5a623]
                                    "
                                >
                                    <span className="shrink-0">{icons.download}</span>
                                    <span>Download Resume</span>
                                </a>
                            )}
                        </div>

                        <span className="sr-only" role="status" aria-live="polite">
                            {copiedKey ? "Copied to clipboard" : ""}
                        </span>

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            {socialLinks.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={`
                                        flex h-9 w-9 items-center justify-center
                                        rounded-lg
                                        border border-[#e8d89a]
                                        bg-[#fdedb0]
                                        text-[#1a1a1a]
                                        shadow-sm
                                        transition-all duration-200
                                        hover:-translate-y-0.5
                                        hover:border-[#e8951f]
                                        hover:bg-[#e8951f]
                                        hover:text-white
                                        hover:shadow-md
                                        dark:border-[#3b3652]
                                        dark:bg-[#221f33]
                                        dark:text-[#c9c4dc]
                                        dark:shadow-none
                                        dark:hover:border-[#f5a623]
                                        dark:hover:bg-[#f5a623]
                                        dark:hover:text-[#1e1b2e]
                                    `}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className=" flex items-center justify-center pt-10 mt-10 border-t border-[#ddd6c2] dark:border-[#332f47] text-slate-800 dark:text-gray-400">
                    <p>
                        © {new Date().getFullYear()} {name}. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
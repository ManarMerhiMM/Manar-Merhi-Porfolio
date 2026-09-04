import data from "../Data/data.json";
import ContactCard from "./ContactCard";

const icons = {
    mail: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
        </svg>
    ),
    phone: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h3l1.5 4.5-2 1.5a11 11 0 006 6l1.5-2L19 15v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" />
        </svg>
    ),
    github: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.66.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
        </svg>
    ),
    linkedin: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4z" />
        </svg>
    ),
    instagram: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
    ),
    download: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0l-4-4m4 4l4-4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14" />
        </svg>
    ),
};

function ContactComponent() {
    const { basicInfo } = data;
    const { resume, socials } = basicInfo;

    const contactMethods = [
        {
            icon: icons.mail,
            label: "Email",
            value: socials.email,
            href: `mailto:${socials.email}`,
        },
        {
            icon: icons.phone,
            label: "Phone",
            value: `${socials.phone.flag} ${socials.phone.code} ${socials.phone.number}`,
            href: `tel:${socials.phone.code}${socials.phone.number}`,
        },
        {
            icon: icons.github,
            label: "GitHub",
            value: socials.github.replace("https://", ""),
            href: socials.github,
        },
        {
            icon: icons.linkedin,
            label: "LinkedIn",
            value: socials.linkedin.replace("https://", ""),
            href: socials.linkedin,
        },
        {
            icon: icons.instagram,
            label: "Instagram",
            value: socials.instagram.replace("https://", ""),
            href: socials.instagram,
        },
    ];

    return (
        <main className="min-h-screen bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6 py-24">
            <div className="mx-auto max-w-6xl">

                <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="font-mono text-sm text-[#b5650a] dark:text-[#f5a623]">
                            Contact
                        </p>

                        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-[#241f14] dark:text-[#f5f0e8]">
                            Let's Work Together
                        </h1>
                    </div>

                    {resume && (
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex w-fit shrink-0 items-center gap-2
                                rounded-lg
                                bg-[#e8951f] dark:bg-[#f5a623]
                                px-5 py-3
                                text-sm font-semibold
                                text-[#241f14] dark:text-[#1e1b2e]
                                transition-all duration-200
                                hover:-translate-y-0.5 hover:shadow-md
                                hover:bg-[#cf7f14] dark:hover:bg-[#f5a623]
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#e8951f]
                                focus-visible:ring-offset-2
                                focus-visible:ring-offset-[#f0e2b8]
                                dark:focus-visible:ring-offset-[#1e1b2e]
                            "
                        >
                            {icons.download}
                            Download Resume
                        </a>
                    )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {contactMethods.map((method) => (
                        <ContactCard
                            key={method.label}
                            icon={method.icon}
                            label={method.label}
                            value={method.value}
                            href={method.href}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
}

export default ContactComponent;
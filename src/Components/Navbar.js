import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import links from '../Data/navLinks';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `transition-colors duration-200 ${
            isActive
                ? "text-[#b5650a] dark:text-[#f5a623] font-semibold border-b-2 border-[#b5650a] dark:border-[#f5a623] pb-1"
                : "text-[#5f594b] dark:text-[#c9c4dc] hover:text-[#b5650a] dark:hover:text-[#f5a623]"
        }`;

    return (
        <nav className="bg-[#f2dfa8] dark:bg-[#28243a] border-b border-[#c9b989] dark:border-[#332f47] shadow-sm dark:shadow-none md:fixed md:w-full">

           <div className="h-20 flex items-center justify-between px-6">

                <span className="font-['Twinkle_Star'] font-bold text-2xl lg:text-3xl leading-none text-slate-900 dark:text-[#c9c4dc]">
                    Portfolio
                </span>

                {/* Desktop navigation */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {links.map(({ name, path }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={navLinkClass}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <ThemeSwitch />

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="
                            md:hidden
                            flex h-10 w-10
                            flex-col items-center justify-center
                            gap-1.5
                            rounded-md
                            text-[#5f594b] dark:text-[#c9c4dc]
                            hover:text-[#b5650a] dark:hover:text-[#f5a623]
                            transition-colors duration-200
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[#e8951f]
                        "
                    >
                        <span
                            className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                                menuOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                        />

                        <span
                            className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                                menuOpen ? "opacity-0" : ""
                            }`}
                        />

                        <span
                            className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                                menuOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            <div
                className={`
                    md:hidden
                    overflow-hidden
                    transition-all duration-300 ease-in-out
                    border-t border-[#c9b989] dark:border-[#332f47]
                    ${
                        menuOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0 border-t-0"
                    }
                `}
            >
                <ul className="flex flex-col gap-1 px-6 py-3">
                    {links.map(({ name, path }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `
                                    block rounded-md px-3 py-3
                                    transition-colors duration-200
                                    ${
                                        isActive
                                            ? "text-[#b5650a] dark:text-[#f5a623] bg-[#fdedb0]/60 dark:bg-[#221f33] font-semibold"
                                            : "text-[#5f594b] dark:text-[#c9c4dc] hover:text-[#b5650a] dark:hover:text-[#f5a623] hover:bg-[#fdedb0]/40 dark:hover:bg-[#221f33]/60"
                                    }
                                    `
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
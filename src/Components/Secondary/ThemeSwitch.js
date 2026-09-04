import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function ThemeSwitch() {
    const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

    return (
        <button
            type="button"
            onClick={toggleDarkTheme}
            aria-label={
                darkTheme
                    ? "Switch to light theme"
                    : "Switch to dark theme"
            }
            aria-pressed={darkTheme}
            className="
                relative flex h-9 w-[68px] items-center
                rounded-full p-1
                bg-[#f2e3b5] dark:bg-[#221f33]
                border border-[#d8cfae] dark:border-[#3b3652]
                shadow-inner
                transition-all duration-300
                hover:shadow-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#efa936]
                dark:focus-visible:ring-[#f5a623]
            "
        >
            {/* Sliding icon */}
            <span
                className="
                    absolute left-1
                    flex h-7 w-7 items-center justify-center
                    rounded-full
                    bg-[#fff6c9] dark:bg-[#332f47]
                    shadow-md
                    transition-all duration-300 ease-in-out
                "
                style={{
                    transform: darkTheme
                        ? "translateX(32px)"
                        : "translateX(0)",
                }}
            >
                {darkTheme ? (
                    // Moon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4 text-[#f5a623]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12.79A9 9 0 1111.21 3
                            7 7 0 0021 12.79z"
                        />
                    </svg>
                ) : (
                    // Sun
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4 text-[#c97f0e]"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 2v2
                            M12 20v2
                            M4.93 4.93l1.42 1.42
                            M17.65 17.65l1.42 1.42
                            M2 12h2
                            M20 12h2
                            M4.93 19.07l1.42-1.42
                            M17.65 6.35l1.42-1.42"
                        />
                    </svg>
                )}
            </span>
        </button>
    );
}

export default ThemeSwitch;
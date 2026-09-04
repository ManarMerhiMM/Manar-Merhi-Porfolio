
import { Link } from "react-router-dom";
import useDocumentTitle from "../Hooks/useDocumentTitle";

function NotFound() {
    useDocumentTitle("404 - Not Found", true);

    const path = typeof window !== "undefined" ? window.location.pathname : "";

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#f5f1e5] dark:bg-[#1e1b2e] px-6 py-24">
            <div className="w-full max-w-lg">
                <div className="rounded-lg border border-[#ddd6c2] dark:border-[#332f47] bg-[#fff6c9] dark:bg-[#221f33] shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-[#ddd6c2] dark:border-[#332f47] bg-[#f2e3b5] dark:bg-[#28243a] px-4 py-3">
                        <span className="h-3 w-3 rounded-full bg-[#c97f0e]/70 dark:bg-[#f5a623]/70" />
                        <span className="h-3 w-3 rounded-full bg-[#827b6b]/40 dark:bg-[#8b86a3]/40" />
                        <span className="h-3 w-3 rounded-full bg-[#827b6b]/40 dark:bg-[#8b86a3]/40" />
                    </div>

                    <div className="px-6 py-8 font-mono text-sm leading-relaxed">
                        <p className="mt-2 text-[#827b6b] dark:text-[#8b86a3] text-2xl">
                            ={">"}{" "}
                            <span className="text-red-600 dark:text-red-400">
                                {path}
                            </span>
                        </p>

                        <p className="my-8 text-6xl font-bold text-[#29261f] dark:text-[#f5f0e8] text-center">
                            404
                        </p>

                        <p className="mt-2 text-[#4a453b] dark:text-[#c9c4dc]">
                            This page doesn't exist. Let's get you back to home safely.
                        </p>

                        <Link
                            to="/"
                            className="mx-auto w-fit mt-8 flex items-center gap-2 rounded-md bg-[#efa936] px-4 py-2 font-semibold text-[#29261f] transition-colors hover:bg-[#df9828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#efa936] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#221f33]"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NotFound;

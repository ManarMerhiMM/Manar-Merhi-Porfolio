
import { Link } from "react-router-dom";
import useDocumentTitle from "../Hooks/useDocumentTitle";

function NotFound() {
    useDocumentTitle("404 - Not Found", true);

    const path = typeof window !== "undefined" ? window.location.pathname : "";

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6 py-24">
            <div className="w-full max-w-lg">
                <div className="rounded-lg border border-[#c9b989] dark:border-[#332f47] bg-[#fdedb0] dark:bg-[#221f33] shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-[#c9b989] dark:border-[#332f47] bg-[#f2dfa8] dark:bg-[#28243a] px-4 py-3">
                        <span className="h-3 w-3 rounded-full bg-[#b5650a]/70 dark:bg-[#f5a623]/70" />
                        <span className="h-3 w-3 rounded-full bg-[#8a7a4e]/40 dark:bg-[#8b86a3]/40" />
                        <span className="h-3 w-3 rounded-full bg-[#8a7a4e]/40 dark:bg-[#8b86a3]/40" />
                    </div>

                    <div className="px-6 py-8 font-mono text-sm leading-relaxed">
                        <p className="mt-2 text-[#8a7a4e] dark:text-[#8b86a3] text-2xl">
                            ={">"}{" "}
                            <span className="text-red-600 dark:text-red-400">
                                {path}
                            </span>
                        </p>

                        <p className="my-8 text-6xl font-bold text-[#241f14] dark:text-[#f5f0e8] text-center">
                            404
                        </p>

                        <p className="mt-2 text-[#4a4022] dark:text-[#c9c4dc]">
                            This page doesn't exist. Let's get you back to home safely.
                        </p>

                        <Link
                            to="/"
                            className="mx-auto w-fit mt-8 flex items-center gap-2 rounded-md bg-[#e8951f] px-4 py-2 font-semibold text-[#241f14] transition-colors hover:bg-[#cf7f14] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8951f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdedb0] dark:focus-visible:ring-offset-[#221f33]"
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

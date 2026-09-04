import data from "../../Data/data.json";
import pfp from "../../Assets/Manar.jpeg";

function Hero() {
    return (
        <section
            id="Overview"
            className="min-h-screen md:min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6 py-16 md:py-0"
        >
            <div className="relative group shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#b5650a] via-[#e8951f] to-[#f5a623] blur-lg opacity-60 dark:opacity-40 transition-opacity duration-300 group-hover:opacity-80" />

                <img
                    src={pfp}
                    alt="pfp"
                    className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover object-center border-4 border-[#111111] dark:border-[#1e1b2e] ring-2 ring-[#b5650a] dark:ring-[#f5a623] shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="w-full max-w-4xl text-center">

                <h1 className="break-words font-['cause'] text-4xl sm:text-6xl md:text-8xl text-[#241f14] dark:text-[#f5f0e8]">
                    {data.basicInfo.name}
                </h1>

                <h2 className="mt-4 break-words font-mono text-xl sm:text-2xl md:text-3xl font-medium text-[#b5650a] dark:text-[#f5a623]">
                    {data.basicInfo.title}
                </h2>

                <h3 className="mt-4 break-words font-mono text-lg sm:text-xl md:text-2xl font-medium text-[#b5650a] dark:text-[#f5a623]">
                    {data.basicInfo.tagline}
                </h3>

                <h4 className="mt-6 font-['IBM_Plex_Mono'] text-sm md:text-base text-[#8a7a4e] dark:text-[#8b86a3]">
                    {data.basicInfo.location.city},{" "}
                    {data.basicInfo.location.country}
                </h4>

                <p className="mx-auto mt-6 max-w-2xl font-['IBM_Plex_Sans'] text-base md:text-lg leading-relaxed text-[#4a4022] dark:text-[#c9c4dc]">
                    {data.basicInfo.bio}
                </p>

            </div>
        </section>
    );
}

export default Hero;
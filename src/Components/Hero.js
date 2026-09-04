import data from "../Data/data.json";

function Hero() {
    return (
        <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-[#f0e2b8] dark:bg-[#1e1b2e] px-6">
            <div className="w-full max-w-4xl text-center">

                <h1 className="font-['cause'] text-6xl md:text-8xl text-[#241f14] dark:text-[#f5f0e8]">
                    {data.basicInfo.name}
                </h1>

                <h2 className="mt-4 font-mono text-2xl md:text-3xl font-medium text-[#b5650a] dark:text-[#f5a623]">
                    {data.basicInfo.title}
                </h2>

                <h3 className="mt-4 font-mono text-1xl md:text-2xl font-medium text-[#b5650a] dark:text-[#f5a623]">
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
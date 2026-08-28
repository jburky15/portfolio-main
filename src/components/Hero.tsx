export default function Hero() {
    return (
        <section id="home"className="min-h-[calc(100vh-80px)] flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6 py-24">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                    Software Developer
                </p>

                <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Building fun and useful things for the web.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                    My name is <span className="text-white text-2xl font-bold hover:text-blue-400">Joe Burkhart</span> and I am a software developer focused on building some fun web apps using React, TypeScript, Python and Node.js.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a href="#projects"
                        className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        View My Current Projects
                    </a>

                    <a href="https://github.com/jburky15"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-700 px-6 py-3 fount-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Check Out My GitHub For More
                    </a>
                </div>
            </div>
        </section>
    )
}
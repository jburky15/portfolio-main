import { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
            <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="text-lg font-semibold tracking-tight text-white transition hover:text-blue-400"
                >
                    JB<span className="text-blue-400">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#projects"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                        Projects
                    </a>
                    <a
                        href="#about"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                        About
                    </a>
                    <a
                        href='#skills'
                        onClick={closeMenu}
                        className='text-sm text-slate-400 transition hover:text-white'
                    >
                        Skills
                    </a>
                    <a
                        href="#experience"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                        Experience
                    </a>
                    <a
                        href="#contact"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-md p-2 text-slate-400 transition hover:bg-slate-900 hover:text-white md:hidden"
                >
                    <span className="relative block h-5 w-5">
                        <span
                            className={`absolute left-0 top-1 h-0.5 w-5 bg-current transition-all duration-300 ${
                                isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                            }`}
                        />

                        <span
                            className={`absolute left-0 top-2.5 h-0.5 w-5 bg-current transition-all duration-300 ${
                                isMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        />

                        <span
                            className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-all duration-300 ${
                                isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                            }`}
                        />
                        </span>
                </button>
            </nav>
            {/* Mobile Navigation */}
                <div
                    className={`overflow-hidden border-t border-slate-800 bg-slate-950 transition-all duration-300 ease-in-out md:hidden ${
                        isMenuOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 border-t-transparent opacity-0'
                    }`}
                >
                    <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className={`py-3 text-sm text-slate-300 transition-all duration-300 ${
                                isMenuOpen
                                ? 'translate-x-0 opacity-100 delay-75'
                                : '-translate-x-4 opacity-0'
                            } hover:text-white`}
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            onClick={closeMenu}
                            className={`py-3 text-sm text-slate-300 transition-all duration-300 ${
                                isMenuOpen
                                ? 'translate-x-0 opacity-100 delay-100'
                                : '-translate-x-4 opacity-0'
                            } hover:text-white`}
                        >
                            About
                        </a>
                        <a
                            href='#skills'
                            onClick={closeMenu}
                            className={`py-3 text-sm text-slate-300 transition-all duration-300 ${
                                isMenuOpen
                                ? 'translate-x-0 opacity-100 delay-150'
                                : '-translate-x-4 opacity-0'
                            } hover:text-white`}
                        >
                            Skills
                        </a>
                        <a
                            href="#experience"
                            onClick={closeMenu}
                            className={`py-3 text-sm text-slate-300 transition-all duration-300 ${
                                isMenuOpen
                                ? 'translate-x-0 opacity-100 delay-200'
                                : '-translate-x-4 opacity-0'
                            } hover:text-white`}
                        >
                            Experience
                        </a>
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className={`py-3 text-sm text-slate-300 transition-all duration-300 ${
                                isMenuOpen
                                ? 'translate-x-0 opacity-100 delay-300'
                                : '-translate-x-4 opacity-0'
                            } hover:text-white`}
                        >
                            Contact
                        </a>
                    </div>
                </div>
        </header>
    )
}

export default Navbar
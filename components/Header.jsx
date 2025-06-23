import { useState } from "react";

function Header() {
    const [showLinks, setShowLinks] = useState(false);

    function renderMobileMenu() {
        if (!showLinks) return null;
        return (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 py-4 z-50 animate-fade-in">
                <nav>
                    <ul>
                        <li className="flex flex-col gap-5 text-center">
                            <a className="text-white" href="#header">Home</a>
                            <a className="text-white" href="#about-me">About Me</a>
                            <a className="text-white" href="#experience">Experience</a>
                            <a className="text-white" href="#projects">Projects</a>
                            <a className="text-white" href="#skills">Skills</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

    return ( 
        <header id="header" className="bg-transparent flex justify-center py-3 items-center absolute top-0 right-0 left-0 z-50">

            <div className="w-7xl mx-3 flex flex-col md:flex-row justify-between items-center">

                <div className="flex gap-3 items-center">

                    <img src="/img/me.png" alt="Avatar" className="h-12 rounded-full shadow-avatar shadow-white/25" />

                    <div className="block w-[1px] h-10 bg-white/20 rounded-2xl"></div>

                    <div className="flex flex-col">
                        <p className="text-white">Brian Orlando Ramirez Nuñez</p>
                        <p className="text-white font-bold text-sm"><span className="bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent">FullStack</span> Developer</p>
                    </div>

                    

                </div>

                <div id="menu" className="md:hidden cursor-pointer" onClick={() => setShowLinks(!showLinks)}>
                    <img src="/img/Menu.svg" alt="Menu" />
                </div>

                {renderMobileMenu()}

                {/* Desktop nav */}
                <div className="hidden md:block">
                    <nav>
                        <ul>
                            <li className="flex flex-col md:flex-row gap-5 text-center">
                                <a className="text-white" href="#header">Home</a>
                                <a className="text-white" href="#about-me">About Me</a>
                                <a className="text-white" href="#experience">Experience</a>
                                <a className="text-white" href="#projects">Projects</a>
                                <a className="text-white" href="#skills">Skills</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

        </header>
    );
}

export default Header;
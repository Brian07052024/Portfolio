import { useState } from "react";
import Link from "./Link";

function Header() {
    const [showLinks, setShowLinks] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    function handleMenuClick() {
        if (showLinks) {
            setIsClosing(true);
            setTimeout(() => {
                setShowLinks(false);
                setIsClosing(false);
            }, 600); // Duración de la animación fade-out (ajusta si tu animación es diferente)
        } else {
            setShowLinks(true);
        }
    }

    function renderMobileMenu() {
        if (!showLinks && !isClosing) return null;
        return (
            <div
                className={`sm:hidden absolute top-full w-[95%] py-4 z-50 animate-fade ${showLinks && !isClosing ? '' : 'animate-fade-out'}`}
            >
                <nav>
                    <ul>
                        <li className="flex flex-col gap-1 text-center">
                            <Link enlace="#header" text="Home" />
                            <Link enlace="#about-me" text="About Me" />
                            <Link enlace="#experience" text="Experience" />
                            <Link enlace="#projects" text="Projects" />
                            <Link enlace="#skills" text="Skills" />
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
                    <div id="menu" className="sm:hidden cursor-pointer" onClick={handleMenuClick}>
                        <img src="/img/Menu.svg" alt="Menu" />
                    </div>

                    <img src="/img/me.png" alt="Avatar" className="h-12 rounded-full shadow-avatar shadow-white/25" />

                    <div className="block w-[1px] h-10 bg-white/20 rounded-2xl"></div>

                    <div className="flex flex-col">
                        <p className="text-white">Brian Orlando Ramirez Nuñez</p>
                        <p className="text-white font-bold text-sm"><span className="bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent">FullStack</span> Developer</p>
                    </div>



                </div>



                {renderMobileMenu()}

                {/* Desktop nav */}
                <div className="hidden sm:block">
                    <nav>
                        <ul>
                            <li className="flex flex-col sm:flex-row gap-5 text-center">
                                <Link enlace="#header" text="Home" />
                                <Link enlace="#about-me" text="About Me" />
                                <Link enlace="#experience" text="Experience" />
                                <Link enlace="#projects" text="Projects" />
                                <Link enlace="#skills" text="Skills" />
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

        </header>
    );
}

export default Header;
import { useState, useEffect } from "react";
import Link from "./Link";


function Header() {
    const [isShowing, setIsShowing] = useState(false);
    const [isAvatarClosing, setIsAvatarClosing] = useState(false);

    // Estado para mostrar/ocultar header según scroll
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const bottomHero = document.querySelector("#hero").getBoundingClientRect().bottom;

            if (currentScrollY > bottomHero) {
                setShowHeader(true)
            } else {
                setShowHeader(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleAvatarClick() {
        if (isShowing) {
            setIsAvatarClosing(true);
            setTimeout(() => {
                setIsShowing(false);
                setIsAvatarClosing(false);
            }, 600); // Duración de la animación fade-out
        } else {
            setIsShowing(true);
        }
    }

    function renderAvatar() {
        if (!isShowing && !isAvatarClosing) return null;
        // Elimina el div extra y asegúrate de que el modal cubre toda la pantalla
        return (
            <div
                className={
                    (isShowing && !isAvatarClosing
                        ? "bg-black/25 backdrop-blur-md fixed inset-0 z-[9999] flex items-center justify-center flex-col gap-5 animate-fade"
                        : isAvatarClosing
                            ? "bg-black/25 backdrop-blur-md fixed inset-0 z-[9999] flex items-center justify-center flex-col gap-5 animate-fade-out"
                            : ""
                    )
                }
                style={{ pointerEvents: 'auto' }}
            >
                <div className="flex flex-col gap-2 items-center mx-3 text-center">
                    <picture>
                        <source srcSet="/img/webp/me.webp" type="image/webp" />
                        <img src="/img/me.png" alt="Avatar" className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg" />
                    </picture>
                    <p className="text-white font-bold text-2xl">Brian Orlando Ramirez Nuñez</p>
                    <p className="text-white font-semibold text-lg">Systems administration engineer</p>
                </div>
                <div className="flex flex-col gap-2 items-center cursor-pointer mt-4" onClick={handleAvatarClick}>
                    <img src="/svg/x-circle.svg" alt="CLOSE" className="bg-red-300 rounded-full w-10 h-10" />
                    <p className="text-white font-bold uppercase text-xl">Close</p>
                </div>
            </div>
        );
    }

    // Altura del header (ajusta si cambias el padding/tamaño)
    const HEADER_HEIGHT = 60;

    return (
        <>
            {renderAvatar()}
            <div style={{ height: HEADER_HEIGHT }}>
                <header
                    id="header"
                    className={`fixed w-full flex justify-center py-1 items-center top-0 right-0 left-0 z-50 transition-all duration-300
                        ${showHeader ? 'backdrop-blur-md bg-transparent animate-fade' : ''}`}
                    style={{ height: HEADER_HEIGHT }}
                >
                    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-3 gap-2 xl:gap-0">
                        <div className="flex gap-3 items-center">
                            <picture>
                                <source srcSet="/img/webp/me.webp" type="image/webp" />
                                <img id="avatar" src="/img/me.png" alt="Avatar" className="h-12 rounded-full shadow-avatar shadow-white/25 cursor-pointer" onClick={handleAvatarClick} />
                            </picture>
                            <div className="block w-[1px] h-10 bg-white/20 rounded-2xl"></div>
                            <div className="flex flex-col">
                                <p className="text-white">Brian Ramirez Nuñez</p>
                                <p className="text-white font-bold text-sm"><span className="text-enfasis">FullStack</span> Developer</p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li className="flex gap-3 text-center">
                                    <Link enlace="#about-me" text="About me" />
                                    <Link enlace="#experience" text="Experience" />
                                    <Link enlace="#projects" text="Projects" />
                                    <Link enlace="#skills" text="Skills" />
                                    <Link enlace="#contact" text="Contact" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;
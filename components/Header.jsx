function Header() {
    return ( 
        <header id="header" className="bg-transparent flex justify-center min-h-20 items-center absolute top-0 right-0 left-0 z-50">

            <div className="w-7xl mx-3 flex justify-between items-center">

                <div className="flex gap-3 items-center">

                    <img src="/img/me.png" alt="Avatar" className="h-12 rounded-full shadow-avatar shadow-white/25" />

                    <div className="block w-[1px] h-10 bg-white/20 rounded-2xl"></div>

                    <div className="flex flex-col">
                        <p className="text-white">Brian Orlando Ramirez Nuñez</p>
                        <p className="text-white font-bold text-sm"><span className="bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent">FullStack</span> Developer</p>
                    </div>

                </div>

                <div>
                    <nav>
                        <ul>
                            <li className="flex gap-5">
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
import Btn from './Btn'
import Icon from './Icon'
import { useEffect, useState } from 'react'

function Hero() {
    const description = "Reesponsive, Optimized and Dynamic Design...";
    const [typedText, setTypedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText((prev) => prev + description.charAt(i));
            i++;
            if (i >= description.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, [description]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className='min-h-screen bg-gradient-to-b from-[#101010] via-[#1A0824] to-[#2d0144] flex justify-center items-center relative' style={{ minHeight: '100dvh' }} id='hero'>

            <div className='max-w-7xl w-full mx-3'>

                <div className='flex flex-col gap-10 xl:flex-row justify-between w-full'>

                    <div className='text-white font-bold text-xl md:text-5xl flex flex-col gap-3 items-center xl:items-start xl:justify-center w-full relative z-40'>
                        <div className='text-center xl:text-left'>
                            <h1><span className='bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent'>FullStack </span>Developer<span className='text-xs bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent'> MERN</span></h1>

                            <h1>Brian Ramirez Nuñez</h1>
                        </div>

                        <p className='text-[10px] md:text-sm text-nonEnfasis font-medium'>
                            {typedText}
                            <span className="inline-block w-2" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
                        </p>

                        <div className='flex gap-5'>
                            <Btn
                                root="/svg/linkedin.svg"
                                text="LinkedIn"
                                link="https://www.linkedin.com/in/brian-ramirez-nu%C3%B1ez-544993341/"
                            />
                            <Btn
                                root="/skills/github.svg"
                                text="GitHub"
                                link="https://github.com/Brian07052024"
                            />
                        </div>

                    </div>

                    <div className='w-full z-20 flex justify-evenly xl:grid xl:grid-cols-3 xl:grid-rows-3'>

                        <Icon
                            icon="/skills/react.svg"
                            nameIcon="React"
                            positionIcon="lg:col-start-1 lg:row-start-1 lg:ml-10"
                            shadowColor="#00C1FF"
                            delay="0s"
                            duration="7s"
                        />
                        <Icon
                            icon="/skills/node.svg"
                            nameIcon="Node.js"
                            positionIcon="lg:col-start-1 lg:row-start-3 lg:-ml-10"
                            shadowColor="#37FF00"
                            delay="1.3s"
                            duration="9s"
                        />
                        <Icon
                            icon="/skills/express.svg"
                            nameIcon="Express.js"
                            positionIcon="lg:col-start-2 lg:row-start-2 lg:-mr-4"
                            shadowColor="white"
                            bgIcon="bg-white rounded-full p-2"
                            delay="2.1s"
                            duration="6s"
                        />
                        <Icon
                            icon="/skills/mongo.svg"
                            nameIcon="MongoDB"
                            positionIcon="lg:col-start-3 lg:row-start-3"
                            shadowColor="#00ED64"
                            delay="0.7s"
                            duration="9s"
                        />
                        <Icon
                            icon="/skills/tailwind.svg"
                            nameIcon="TailwindCSS"
                            positionIcon="lg:col-start-3 lg:row-start-1"
                            shadowColor="#38BDF8"
                            delay="2.7s"
                            duration="6s"
                        />

                    </div>

                </div>

            </div>

            <div className='absolute bottom-0 w-full h-16 z-20 bg-gradient-to-b from-transparen to-negro'></div>
            <img src="/svg/wavesCinco.svg" alt="" className='absolute bottom-0 w-screen z-10' />

        </div>
    )
}

export default Hero

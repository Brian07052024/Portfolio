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
        <div className='h-screen bg-gradient-to-b from-[#101010] via-[#1A0824] to-[#2d0144] flex justify-center items-center relative'>
            <div className='max-w-7xl w-full mx-3'>
                <div className='flex justify-between w-full'>
                    <div className='text-white font-bold text-5xl flex flex-col gap-2 w-full relative z-50'>
                        <h1 className=''><span className='bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent'>FullStack </span>Developer<span className='text-xs bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent'> MERN</span></h1>
                        <h1 className=''>Brian Ramirez Nuñez</h1>
                        <p className='text-xs text-nonEnfasis font-medium'>
                            {typedText}
                            <span className="inline-block w-2" style={{opacity: showCursor ? 1 : 0}}>|</span>
                        </p>
                        <div className='flex gap-5'>
                            <Btn
                                root="/img/linkedin.svg"
                                text="LinkedIn"
                            />
                            <Btn
                                root="/img/github.svg"
                                text="GitHub"
                            />
                        </div>
                    </div>
                    <div className='relative w-full z-20'>
                        <Icon
                            icon="/img/react.svg"
                            nameIcon="React"
                            positionIcon="-left-96 -top-44 bottom-0 right-0"
                            shadowColor="#00C1FF"
                            delay="0s"
                            duration="7s"
                        />
                        <Icon
                            icon="/img/node.svg"
                            nameIcon="Node.js"
                            positionIcon="-left-80 top-44 bottom-0 right-0"
                            shadowColor="#37FF00"
                            delay="1.3s"
                            duration="9s"
                        />
                        <Icon
                            icon="/img/express.svg"
                            nameIcon="Express.js"
                            positionIcon="left-0 top-0 bottom-0 right-0"
                            shadowColor="white"
                            bgIcon="bg-white rounded-full p-2"
                            delay="2.1s"
                            duration="6s"
                        />
                        <Icon
                            icon="/img/mongo.svg"
                            nameIcon="MongoDB"
                            positionIcon="left-96 top-32 bottom-0 right-0"
                            shadowColor="#00ED64"
                            delay="0.7s"
                            duration="9s"
                        />
                        <Icon
                            icon="/img/TailwindCSS.svg"
                            nameIcon="TailwindCSS"
                            positionIcon="left-96 -top-32 bottom-0 -right-20"
                            shadowColor="#38BDF8"
                            delay="2.7s"
                            duration="6s"
                        />
                    </div>
                </div>
                
            </div>
            <div className='absolute bottom-0 w-full h-16 z-20 bg-gradient-to-b from-transparen to-negro'></div>
            <img src="/img/wavesCinco.svg" alt="" className='absolute bottom-0 w-screen z-10' />
        </div>
    )
}

export default Hero

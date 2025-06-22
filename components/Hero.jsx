import Btn from './Btn'
import Icon from './icon'

function Hero() {
  return (
    <div className='h-screen bg-gradient-to-b from-[#101010] via-[#1A0824] to-[#240038] flex justify-center items-center'>
      <div className='max-w-7xl w-full mx-3'>
        <div className='flex justify-between w-full'>
          <div className='text-white font-bold text-5xl flex flex-col gap-2 w-full relative z-50'>
            <h1 className=''><span className='bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent'>FullStack </span>Developer<span className='text-xs bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent'> MERN</span></h1>
            <h1 className=''>Brian Ramirez Nuñez</h1>
            <p className='text-base text-nonEnfasis font-medium'>Responsive, Optimized and Dynamic Design...</p>
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
          <div className='relative w-full'>
            <Icon
              icon="/img/react.svg"
              nameIcon="React"
              positionIcon="-left-96 -top-44 bottom-0 right-0"
              shadowColor="#00C1FF"
              delay="0s"
              duration="8s"
            />
            <Icon
              icon="/img/node.svg"
              nameIcon="Node.js"
              positionIcon="-left-80 top-44 bottom-0 right-0"
              shadowColor="#37FF00"
              delay="1.3s"
              duration="10s"
            />
            <Icon
              icon="/img/express.svg"
              nameIcon="Express.js"
              positionIcon="left-0 top-0 bottom-0 right-0"
              shadowColor="white"
              bgIcon="bg-white rounded-full p-2"
              delay="2.1s"
              duration="7s"
            />
            <Icon
              icon="/img/mongo.svg"
              nameIcon="MongoDB"
              positionIcon="left-96 top-32 bottom-0 right-0"
              shadowColor="#00ED64"
              delay="0.7s"
              duration="10s"
            />
            <Icon
              icon="/img/TailwindCSS.svg"
              nameIcon="TailwindCSS"
              positionIcon="left-96 -top-32 bottom-0 -right-20"
              shadowColor="#38BDF8"
              delay="2.7s"
              duration="8s"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

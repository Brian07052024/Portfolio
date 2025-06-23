import TitleSection from "./TitleSection";
import Btn from "./Btn";

function Main() {
    return (
        <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-5 mb-96">
            <TitleSection
                spanText={"About Me"}
                h2Text={"Who I Am?"}
            />

            <div className="flex gap-5">
                <div className="">
                    <div className="text-white flex flex-col gap-3 mb-5 text-pretty">
                        <p><span className="text-enfasis text-4xl">Hello</span>, my name is Brian Orlando Ramírez Núñez. I'm a Systems Engineering student and I love programming. </p>
                        <p>I thoroughly enjoy every step of the development process, from tackling challenges to delving deeper into projects. I'm motivated by the desire to push boundaries, solve problems efficiently, and always seek best practices and achieve high-quality results.
                        </p>
                        <p>Let's work together and build something great!</p>
                    </div>
                    <Btn
                        root="/img/github.svg"
                        text="Contact Me"
                    />
                    
                </div>
                <div className="rounded-2xl overflow-hidden">
                    <img src="/img/aboutmeimg.png" alt="ME" className="hover:scale-110 transition cursor-pointer" />
                </div>
            </div>
        </div>

    );
}

export default Main;
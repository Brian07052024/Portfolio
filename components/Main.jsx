import TitleSection from "./TitleSection";
import Btn from "./Btn";
import ExperienceCard from "./ExperienceCard";

function Main() {
    return (
        <div className="max-w-7xl mx-auto mt-20" >
            <div className="flex flex-col gap-5 mx-3" id="about-me">
                <TitleSection
                    spanText={"About Me"}
                    h2Text={"Who I Am?"}
                />

                <div className="flex flex-col md:flex-row gap-5">
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

            <div className="flex flex-col gap-5 mx-3 mt-20" id="experience">

                <TitleSection
                    spanText={"Experience"}
                    h2Text={"My Experience"}
                />

                <div className="flex flex-col gap-5">
                    <ExperienceCard
                        icon="/img/freelancer.svg"
                        title="Freelancer"
                        date="January 2024 - Present"
                        description="Creating landing pages for my clients tailored to their needs, with the necessary features and a good design."
                    />
                    <ExperienceCard
                        icon="/img/figma.svg"
                        title="UX/UI Design"
                        date="January 2024 - June 2024"
                        description="Certified in UX/UI design by the Faculty of Mechanical and Electrical Engineering."
                    />
                    <ExperienceCard
                        icon="/img/pwa.png"
                        title="Progressive Web Apps"
                        date="January 2024 - June 2024"
                        description="Experience creating responsive and modern websites. Creating web experiences that work even offline and can be installed as mobile apps."
                    />
                    <ExperienceCard
                        icon="/img/mern.png"
                        title="MERN Developer"
                        date="May 2025 - Today"
                        description="Handling the MERN stack to build full-stack web applications."
                    />

                </div>

            </div>
        </div>

    );
}

export default Main;
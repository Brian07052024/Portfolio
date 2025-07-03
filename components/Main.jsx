import TitleSection from "./TitleSection";
import Btn from "./Btn";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";

import { useRef, useEffect, useState } from "react";


function Main() {
    const aboutMeRef = useRef(null);
    const experienceRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);

    const [showAboutMe, setshowAboutMe] = useState(false);
    const [showCards, setShowCards] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    // Reusable observer hook
    useEffect(() => {
        const createObserver = (ref, setState) => {
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setState(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.2 }
            );
            if (ref.current) {
                observer.observe(ref.current);
            }
            return observer;
        };

        const observers = [
            createObserver(aboutMeRef, setshowAboutMe),
            createObserver(experienceRef, setShowCards),
            createObserver(projectRef, setShowProjects),
            createObserver(skillsRef, setShowSkills)
        ];

        return () => observers.forEach(observer => observer.disconnect());
    }, []);

    return (
        <div className="max-w-7xl mx-auto mt-20 pb-20" >
            <div className="flex flex-col gap-5 mx-3" id="about-me" >
                <TitleSection
                    spanText={"About Me"}
                    h2Text={"Who I Am?"}
                />

                <div className="flex flex-col md:flex-row gap-5" ref={aboutMeRef}>
                    <div className="">
                        <div className="text-white flex flex-col gap-3 mb-5 text-pretty">
                            <p><span className="text-enfasis text-4xl">Hello</span>, my name is Brian Orlando Ramírez Núñez. I'm a Systems Engineering student and I love programming. </p>
                            <p>I thoroughly enjoy every step of the development process, from tackling challenges to delving deeper into projects. I'm motivated by the desire to push boundaries, solve problems efficiently, and always seek best practices and achieve high-quality results.
                            </p>
                            <p>Let's work together and build something great!</p>
                        </div>
                        <Btn
                            root="/skills/github.svg"
                            text="Contact Me"
                        />

                    </div>

                    <div className={`rounded-2xl overflow-hidden transition duration-700 ${showAboutMe ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-8 md:translate-x-8 pointer-events-none'}`}>
                        <img src="/img/aboutmeimg.png" alt="ME" className="hover:scale-110 transition cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 mx-3 mt-20" id="experience" ref={experienceRef}>
                <TitleSection
                    spanText={"Experience"}
                    h2Text={"My Experience"}
                />

                <div className={`flex flex-col gap-5 transition duration-700 ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                        <ExperienceCard
                            icon="/svg/freelancer.svg"
                            title="Freelancer"
                            date="January 2024 - Present"
                            description="Creating landing pages for my clients tailored to their needs, with the necessary features and a good design."
                        />
                        <ExperienceCard
                            icon="/skills/figma.svg"
                            title="UX/UI Design"
                            date="January 2024 - June 2024"
                            description="Certified in UX/UI design by the Faculty of Mechanical and Electrical Engineering."
                        />
                        <ExperienceCard
                            icon="/skills/pwa.svg"
                            title="Progressive Web Apps"
                            date="January 2024 - June 2024"
                            description="Experience creating responsive and modern websites. Creating web experiences that work even offline and can be installed as mobile apps."
                            gridSpan={"lg:col-span-2"}
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


            <div className="flex flex-col gap-8 mx-3 mt-20" id="projects" ref={projectRef}>
                <TitleSection
                    spanText={"Projects"}
                    h2Text={"My Projects"}
                />

                <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-9`}>
                    {[
                        {
                            mainImg: "/img/cloudheaven3.png",
                            title: "Cloud Heaven - Your Personal Cloud",
                            description: "CRUD web application that lets you store your best moments in personalized albums, add captions to your best photos, and collect moments!",
                            images: ["/skills/php.svg", "/skills/scss.svg", "/skills/Js.svg"]
                        },
                        {
                            mainImg: "/img/weathern.png",
                            title: "Weather - The Weather in Your Pocket",
                            description: "Quickly stay up-to-date with weathern, the web app that uses an API and displays the information you need, check the weather in your city and others around the world!",
                            images: ["/skills/html.svg", "/skills/Js.svg", "/skills/tailwind.svg"]
                        },
                        {
                            mainImg: "/img/pokedexrn.png",
                            title: "PokeRN - Your Favorite Pocket Monsters",
                            description: "Re-explore the list of your favorite pocket monsters now better than ever with an attractive visual interface and customizable search in this web app that uses the PokeAPI!",
                            images: ["/skills/html.svg", "/skills/Js.svg", "/skills/tailwind.svg"]
                        }
                    ].map((project, idx) => (
                        <div
                            key={project.title}
                            className={`transition duration-700 ${showProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                            idx={idx}
                        >
                            <ProjectCard
                                mainImg={project.mainImg}
                                title={project.title}
                                description={project.description}
                                images={project.images}
                            />
                        </div>
                    ))}
                </div>


            </div>


            <div className="flex flex-col gap-8 mx-3 mt-20" id="skills" ref={skillsRef}>
                <TitleSection
                    spanText={"Skills"}
                    h2Text={"My Skills"}
                />

                <div className={`transition duration-700 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>

                    <Skills />
                </div>
            </div>


        </div>
    );
}

export default Main;
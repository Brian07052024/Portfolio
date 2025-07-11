
import TitleSection from "./TitleSection";
import Btn from "./Btn";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";
import { sendContactEmail } from "./emailService";

import { useRef, useEffect, useState } from "react";


function Main() {
    const aboutMeRef = useRef(null);
    const experienceRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const [showAboutMe, setshowAboutMe] = useState(false);
    const [showCards, setShowCards] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showContact, setShowContact] = useState(false);

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
            createObserver(skillsRef, setShowSkills),
            createObserver(contactRef, setShowContact) // Contact section doesn't need to set state
        ];

        return () => observers.forEach(observer => observer.disconnect());
    }, []);

    const projects = [
        {
            mainImg: "/img/cloudheaven3.png", // Usar <picture> en ProjectCard
            title: "Cloud Heaven - Your Personal Cloud",
            description: "CRUD web application that lets you store your best moments in personalized albums, add captions to your best photos, and collect moments!",
            link: "https://github.com/Brian07052024/Cloud-Heaven",
            images: ["/skills/php.svg", "/skills/scss.svg", "/skills/Js.svg"]
        },
        {
            mainImg: "/img/weathern.png", // Usar <picture> en ProjectCard
            title: "Weather - The Weather in Your Pocket",
            description: "Quickly stay up-to-date with weathern, the web app that uses an API and displays the information you need, check the weather in your city and others around the world!",
            link: "https://weathe-rn.netlify.app/",
            images: ["/skills/html.svg", "/skills/Js.svg", "/skills/tailwind.svg"]
        },
        {
            mainImg: "/img/pokedexrn.png", // Usar <picture> en ProjectCard
            title: "PokeRN - Your Favorite Pocket Monsters",
            description: "Re-explore the list of your favorite pocket monsters now better than ever with an attractive visual interface and customizable search in this web app that uses the PokeAPI!",
            link: "https://pokedex-rn.netlify.app/",
            images: ["/skills/html.svg", "/skills/Js.svg", "/skills/tailwind.svg"]
        },
        {
            mainImg: "/img/uilibrary.jpg", // Usar <picture> en ProjectCard
            title: "UI Collection - Library of UI Components", 
            description: "Coming soon! A collection of reusable UI components for your projects, designed to speed up your development process. Mern aplication with a modern and responsive design.",
            link: "#",
            images: ["/skills/mongo.svg", "/skills/express.svg", "/skills/react.svg", "/skills/node.svg"]
        }
    ]

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const errorContainer = document.querySelector("#form-errors");

    function validar(e) {
        e.preventDefault();
        const values = {
            name: name.value.trim(),
            email: email.value.trim(),
            message: message.value.trim()
        }

        const errores = [];

        Object.entries(values).forEach(([key, value]) => {
            if (value === "") {
                errores.push(key);
            }
        });

        // Limpiar errores anteriores
        if (errorContainer) {
            errorContainer.innerHTML = "";
        }

        if (errores.length > 0) {
            if (errorContainer) {
                errores.forEach((campo) => {
                    const p = document.createElement("p");
                    p.textContent = `El campo '${campo}' es obligatorio.`;
                    p.className = "bg-red-100 text-red-600 rounded p-2 mb-2 text-sm font-semibold text-center";
                    errorContainer.appendChild(p);
                });
            }
            return;
        }

        // Si no hay errores, enviamos el form
        sendContactEmail(values)
          .then((result) => {
            console.log('Correo enviado', result.text);
            // mensaje de éxito al usuario
            if (errorContainer) {
              const p = document.createElement("p");
              p.textContent = "¡Mensaje enviado con éxito!";
              p.className = "bg-green-100 text-green-700 rounded p-2 mb-2 text-sm font-semibold text-center";
              errorContainer.appendChild(p);
              // Ocultar el mensaje después de 3 segundos
              setTimeout(() => {
                if (errorContainer.contains(p)) {
                  errorContainer.removeChild(p);
                }
              }, 3000);
            }
            // Limpiar campos
            name.value = '';
            email.value = '';
            message.value = '';
          })
          .catch((error) => {
            console.log('Error al enviar', error.text);
            if (errorContainer) {
              const p = document.createElement("p");
              p.textContent = "Hubo un error al enviar el mensaje. Intenta de nuevo.";
              p.className = "bg-red-100 text-red-600 rounded p-2 mb-2 text-sm font-semibold text-center";
              errorContainer.appendChild(p);
            }
          });
    }

    // Main component rendering

    return (
        <div className="max-w-7xl mx-auto mt-20 pb-20 pt-16 md:pt-20" >
            <div className="flex flex-col gap-5 mx-3" id="about-me" >
                <TitleSection
                    spanText={"About Me"}
                    h2Text={"Who I Am?"}
                />

                <div className="flex flex-col md:flex-row gap-5" ref={aboutMeRef}> 
                    <div className={`transition duration-700 ${showAboutMe ? 'opacity-100 lg:-translate-x-0 translate-y-0' : 'opacity-0 lg:-translate-x-8 translate-y-8 pointer-events-none'}`}>
                        <div className="text-white flex flex-col gap-3 mb-5 text-pretty">
                            <p><span className="text-enfasis text-4xl">Hello</span>, my name is Brian Orlando Ramírez Núñez. I'm a Systems Engineering student and I love programming. </p>
                            <p>I thoroughly enjoy every step of the development process, from tackling challenges to delving deeper into projects. I'm motivated by the desire to push boundaries, solve problems efficiently, and always seek best practices and achieve high-quality results.
                            </p>
                            <p>Let's work together and build something great!</p>
                        </div>
                        <Btn
                            root="/svg/mail.svg"
                            text="Contact Me"
                            link="#contact"
                        />

                    </div>

                    <div className={`rounded-2xl overflow-hidden transition duration-700 ${showAboutMe ? 'opacity-100 lg:translate-x-0 translate-y-0' : 'opacity-0 lg:translate-x-8 translate-y-8 pointer-events-none'}`}>
                        <picture>
                            <source srcSet="/img/webp/aboutmeimg.webp" type="image/webp" />
                            <img src="/img/aboutmeimg.png" alt="ME" className="hover:scale-110 transition cursor-pointer" />
                        </picture>
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
                            icon="/img/mern.png" // Usar <picture> en ExperienceCard si es imagen
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

                <div className={`grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-14`}>
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className={`transition duration-700 ${showProjects ? 'opacity-100 md:translate-y-0 translate-y-0' : 'opacity-0 md:translate-y-8 translate-y-8 pointer-events-none'}`}
                            idx={idx}
                        >
                            <ProjectCard
                                mainImg={project.mainImg}
                                title={project.title}
                                description={project.description}
                                link={project.link}
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

            <div className="flex flex-col gap-8 mx-3 mt-20" id="contact" ref={contactRef}>
                <TitleSection
                    spanText={"Contact"}
                    h2Text={"Contact Me"}
                />
                <div className={`flex flex-col-reverse items-center md:items-start md:flex-row gap-10`}>

                    <form action="" className={`block w-full max-w-96 min-w-72 bg-white p-5 rounded-2xl transition duration-700 ${showContact ? 'opacity-100 lg:-translate-x-0 translate-y-0' : 'opacity-0 lg:-translate-x-8 translate-y-8 pointer-events-none'}`} onSubmit={validar}>
                        
                        <div className="flex flex-col gap-5">
                            <p className="font-bold text-center text-xl">Contact me</p>
                            <label className="font-semibold" htmlFor="name">Name</label>
                            <input id="name" name="name" type="text" placeholder="Your Name" className="p-3 rounded-lg bg-[#E8F0FE] border-2 border-black text-gray-500" />

                            <label className="font-semibold" htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="Your Email" className="p-3 rounded-lg bg-[#E8F0FE] border-2 border-black text-gray-500" />

                            <label className="font-semibold" htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" className="p-3 rounded-lg bg-[#E8F0FE] border-2 border-black text-gray-500 h-32"></textarea>

                            <p className="text-[10px] text-gray-500">Remember to check that your email is spelled correctly, this will help me contact you back!</p>
                            <Btn
                                typeBtn="submit"
                                root="/svg/mail.svg"
                                text="Send Message"
                                colr="bg-black text-white"
                            />
                        </div>
                    </form>

                    <div className={`flex flex-col gap-5 transition duration-700 ${showContact ? 'opacity-100 lg:translate-x-0 translate-y-0' : 'opacity-0 lg:translate-x-8 translate-y-8 pointer-events-none'}`}>
                        <p className="text-white text-2xl md:text-5xl">Do you have a great idea and <span className="text-3xl md:text-6xl bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent">want </span>to make it a reality?</p>
                        <p className="text-white text-2xl md:text-5xl">Let's work <span className="text-3xl md:text-6xl bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent">together </span>and build something great!</p>
                        <div id="form-errors" className="mb-2"></div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Main;
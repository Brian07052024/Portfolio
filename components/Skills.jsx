function Skills() {
    const skills = [
        { name: "JavaScript", src: "/skills/Js.svg" },
        { name: "HTML", src: "/skills/html.svg" },
        { name: "CSS", src: "/skills/css.svg" },
        { name: "React", src: "/skills/react.svg" },
        { name: "Node.js", src: "/skills/node.svg" },
        { name: "Express", src: "/skills/express.svg" },
        { name: "MongoDB", src: "/skills/mongo.svg" },
        { name: "Git", src: "/skills/git.svg" },
        { name: "GitHub", src: "/skills/github.svg" },
        { name: "Figma", src: "/skills/figma.svg" },
        { name: "PWA", src: "/skills/pwa.svg" },
        { name: "Tailwind", src: "/skills/tailwind.svg" },
        { name: "PHP", src: "/skills/php.svg" },
        { name: "SCSS", src: "/skills/scss.svg" },
        { name: "Vite", src: "/skills/vite.svg" },
        { name: "Pug", src: "/skills/pug.svg" },
        { name: "MySQL", src: "/skills/mysql.svg" },
    ];

    return (
        <div className="text-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {skills.map((skill, idx) => (
                <div className="flex flex-col gap-2 exp-cards items-center justify-center px-16 py-8 hover:-translate-y-2 duration-[250ms] transition cursor-pointer" key={idx}>
                    <img src={skill.src} alt={skill.name} className="size-16 object-contain" />
                    <p className="font-bold">{skill.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Skills;
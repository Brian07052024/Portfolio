function Skills() {
    const skills = ["Js", "html", "css", "react", "node", "express", "mongo", "git", "github", "figma", "pwa", "tailwind", "php", "scss", "vite", "pug", "mysql"];

    return (
        <div className="text-white grid grid-cols-6 gap-5">
            {skills.map((skill, idx) => (
                <div className="flex flex-col gap-2 exp-cards items-center justify-center px-16 py-8" key={idx}>
                    <img src={`/skills/${skill}.svg`} alt="skill" className="size-16 object-contain" />
                    <p className="font-bold uppercase">{skill}</p>
                </div>
            ))}
        </div>
        
    );
}

export default Skills;
function ProjectCard({ mainImg, title, description, link, images = []}) {
    return (
        <div className="bg-white max-w-[405px] rounded-2xl px-3 flex flex-col mt-5 gap-5 items-center justify-center h-full">
            <img src={mainImg} alt="mainImg" className="w-[380px] rounded-2xl -mt-6 shadow-xl hover:-translate-y-3 duration-[250ms] transition cursor-pointer hover:border-gray-500 hover:shadow-[0_0_10px_1px_rgba(139,92,246,0.5)]" />
            <div className="flex flex-col h-full mb-3 gap-2 justify-between">

                <h4 className="font-bold">{title}</h4>

                <p>{description}</p>

                <div className="flex items-center gap-3">
                    
                    <div className="block cursor-pointer bg-black rounded-2xl px-4 py-1 hover:scale-105 duration-200 hover:border-gray-500 hover:shadow-[0_0_10px_1px_rgba(139,92,246,0.5)]">
                        <a href={link} className="flex justify-center items-center text-white gap-1">
                            <img src="/svg/eye.svg" alt="eye" />
                            <p>View</p>
                        </a>
                    </div>

                    <div className="flex gap-5 justify-center items-center w-full">
                        {images.map((img, idx) => (
                            <img key={idx} src={img.endsWith('.svg') ? img.replace('/img/', '/svg/') : img} alt={`tech-${idx}`} className="size-8 object-contain" />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ProjectCard;
function ProjectCard({ mainImg, title, description, images = []}) {
    return (
        <div className="bg-white rounded-2xl px-3 pb-3 mt-5 flex flex-col gap-5 max-w-min">
            <img src={mainImg} alt="mainImg" className="max-w-[360px] rounded-2xl -mt-6 shadow-xl hover:-translate-y-3 transition" />
            <div className="flex flex-col gap-2 h-full justify-between">

                <h4 className="font-bold">{title}</h4>

                <p>{description}</p>

                <div className="flex items-center gap-3">
                    <div className="block bg-black rounded-2xl px-4 py-1">
                        <a href="" className="flex justify-center items-center text-white gap-1">
                            <img src="/svg/eye.svg" alt="eye" />
                            <p>View</p>
                        </a>
                    </div>
                    <div className="flex justify-between w-full">
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
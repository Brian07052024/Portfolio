function ExperienceCard({icon, title, date, description, gridSpan}) {
    // Si el icono es SVG, usar /svg, si no, dejar igual
    const iconPath = icon.endsWith('.svg') ? icon.replace('/img/', '/svg/') : icon;
    return ( 

        
        <div className={`text-white exp-cards p-5 flex flex-col gap-3 ${gridSpan}`}>
            
            <div className="flex gap-2 items-center">
                <img src={iconPath} alt="Icon" className="size-8" />
                <p className="text-lg">{title}</p>
            </div>

            <span className="text-xs text-enfasis">{date}</span>

            <p className="text-base">{description}</p>
        </div>
     );
}

export default ExperienceCard;
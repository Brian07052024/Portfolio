function ExperienceCard({icon, title, date, description, gridSpan}) {
    
    return ( 

        
        <div className={`text-white exp-cards p-5 flex flex-col gap-3 ${gridSpan}`}>
            
            <div className="flex gap-2 items-center">
                {icon && icon.endsWith('.png') ? (
                    <picture>
                        <source srcSet={icon.replace('/img/', '/img/webp/').replace('.png', '.webp')} type="image/webp" />
                        <img src={icon} alt="Icon" className="size-8" />
                    </picture>
                ) : (
                    <img src={icon} alt="Icon" className="size-8" />
                )}
                <p className="text-lg">{title}</p>
            </div>

            <span className="text-xs text-enfasis">{date}</span>

            <p className="text-base">{description}</p>
        </div>
     );
}

export default ExperienceCard;
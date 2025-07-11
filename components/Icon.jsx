function Icon({ icon, nameIcon, positionIcon, shadowColor, bgIcon, delay = "0s", duration = "4s" }) {
    // Si el icono es SVG, usar /svg, si no, dejar igual
    const iconPath = icon.endsWith('.svg') ? icon.replace('/img/', '/svg/') : icon;
    // Tamaños fijos para evitar reflow y mejorar LCP
    const sizes = {
        width: 96, // 24 * 4 (tailwind lg:size-24)
        height: 96
    };
    return (
        <div
            className={`flex flex-col items-center levitar-suave ${positionIcon}`}
            style={{ animationDelay: delay, animationDuration: duration }}
        >
            <img
                src={iconPath}
                alt={nameIcon}
                width={sizes.width}
                height={sizes.height}
                fetchPriority="high"
                decoding="async"
                className={`size-8 sm:size-16 lg:size-24 xl:size-32 object-contain ${bgIcon} hover:scale-110 transition`}
                style={{ filter: `drop-shadow(0 0 25px ${shadowColor})` }}
            />
            <span className="mt-2 text-xs font-normal sm:text-sm md:text- xl:text-base text-white">{nameIcon}</span>
        </div>
    );
}

export default Icon;

function Icon({ icon, nameIcon, positionIcon, shadowColor, bgIcon, delay = "0s", duration = "4s" }) {
    return (
        <div
            className={`flex flex-col items-center levitar-suave ${positionIcon}`}
            style={{ animationDelay: delay, animationDuration: duration }}
        >
            <img
                src={icon}
                alt={nameIcon}
                className={`size-8 md:size-16 lg:size-32 object-contain ${bgIcon} hover:scale-110 transition`}
                style={{ filter: `drop-shadow(0 0 25px ${shadowColor})` }}
            />
            <span className="mt-2 text-xs md:text-sm lg:text-base text-white font-bold">{nameIcon}</span>
        </div>
    );
}

export default Icon;

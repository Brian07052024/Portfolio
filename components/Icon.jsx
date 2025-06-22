function Icon({ icon, nameIcon, positionIcon, shadowColor, bgIcon, delay = "0s", duration = "4s" }) {
    return (
        <div
            className={`flex flex-col items-center absolute levitar-suave ${positionIcon}`}
            style={{ animationDelay: delay, animationDuration: duration }}
        >
            <img
                src={icon}
                alt={nameIcon}
                className={`w-32 h-32 object-contain ${bgIcon}`}
                style={{ filter: `drop-shadow(0 0 25px ${shadowColor})` }}
            />
            <span className="mt-2 text-base text-white font-bold">{nameIcon}</span>
        </div>
    );
}

export default Icon;

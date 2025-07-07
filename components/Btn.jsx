function Btn(props) {
    const { root, text, link, colr, typeBtn } = props;
    return (
        <button type={typeBtn} className={`flex justify-center items-center cursor-pointer font-bold px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-full border border-gray-300 hover:scale-105 duration-200 hover:border-gray-500 hover:shadow-[0_0_10px_1px_rgba(139,92,246,0.5)] ${colr ? colr : 'bg-white text-black'}`}>

            <a href={link} className="flex gap-2 ">
                <img src={root} alt="img" className={`${colr ? "invert" : ""}`} />
                <p className="text-base">{text}</p>
            </a>
        </button>
    );
}

export default Btn;
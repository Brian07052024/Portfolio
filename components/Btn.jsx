function Btn(props) {
    const { root, text } = props;
    return (
        <button className="flex gap-3 cursor-pointer text-black font-bold bg-white p-6 py-3 rounded-full border border-gray-300 hover:scale-105 duration-200 hover:border-gray-500 hover:shadow-[0_0_10px_1px_rgba(139,92,246,0.5)]">
            <img src={root} alt="GitHub" />
            <p className="text-base">{text}</p>
        </button>
    );
}

export default Btn;
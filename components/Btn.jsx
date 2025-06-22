function Btn(props) {
    const {root, text} = props;
    return ( 
        <button className="w-30 h-8 bg-white text-black text-base font-bold rounded-2xl flex items-center justify-center gap-2">
            <img src={root} alt="iconBtn" />
            <p>{text}</p>
        </button>
     );
}

export default Btn;
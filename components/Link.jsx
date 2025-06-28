function Link({ enlace, text }) {
    return (
        <a href={enlace} className="text-white bg-black/25 sm:bg-transparent rounded-md py-1">{text}</a>
    );
}

export default Link;
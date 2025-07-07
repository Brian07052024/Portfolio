function Link({ enlace, text }) {
    return (
        <a href={enlace} className="text-white rounded-md py-1 hover:text-enfasis transition">{text}</a>
    );
}

export default Link;
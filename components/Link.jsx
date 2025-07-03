function Link({ enlace, text }) {
    return (
        <a href={enlace} className="text-white rounded-md py-1">{text}</a>
    );
}

export default Link;
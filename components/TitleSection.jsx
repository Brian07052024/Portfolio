function TitleSection({spanText, h2Text}) {
    return (
        <div>
            <span className="text-xs text-enfasis font-bold">{spanText}</span>
            <h2 className="text-2xl font-bold text-white">{spanText}</h2>
        </div>
    );
}

export default TitleSection;
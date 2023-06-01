type propsLongText = {
    text: string;
    title: string
}

export function LongText(props: propsLongText) {
    const randomNumber = Math.floor(Math.random() * 3)
    let randomStyle = '';
    switch (randomNumber) {
        case 0:
            randomStyle = "bg-light text-dark";
            break;
        case 1:
            randomStyle= "bg-dark text-light";
            break;
        case 2:
            randomStyle = "bg-light text-dark";
            break;
    
        default:
            break;
    }
    let finalStyle = "row m-2 rounded-5 p-5 " + randomStyle
    return (
        <div className={finalStyle}>
            <h1 className="title text-secondary">{props.title}</h1>
            <p className="longText">
                {props.text}
            </p>
        </div>
    );
}
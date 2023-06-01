import logoSlim from '../assets/logoSlim.svg'

type Information = {
    title: string;
    text: string;
}

export function Information(props: Information) {
    return (
        <div className=" py-5 my-5 text-center">
            <h1 className="title pb-5">{props.title}</h1>
            <img className="d-block mx-auto mb-4" src={logoSlim} alt="logo"/>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{props.text}</p>
            </div>
        </div>
    );
}

type Informations = {
    title: string;
    text: string;
}

export function Informations(props: Informations) {
    const randomNumber = Math.floor(Math.random() * 3)
    let randomStyle = '';
    switch (randomNumber) {
        case 0:
            randomStyle = "bg-primary text-dark";
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
    let finalStyle = "row justify-content-center align-items-center rounded-4 " + randomStyle
    return (
        <div className={finalStyle}>
            <div className=" py-5 my-5 text-center">
                <h1 className="title pb-5">{props.title}</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{props.text}</p>
                </div>
            </div>
        </div>
    );
}
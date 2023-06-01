import moreImage from '../assets/moreImage.png'
/*Imports*/
import { useRef } from 'react';

type CardsProps = {
    src: string;
    alt: string;
    title: string;
    text: string;
    width: string;
    href: string;
}

export function Cards(props: CardsProps) {
    const maxCaracter = 100
    if (props.text.length > maxCaracter) {
        var text = props.text.substring(0, maxCaracter);
    } else {
        var text = props.text;
    }

    return (
        <div className="col m-3">
            <div className="card" style={{ width: props.width }}>
                <img src={props.src} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text" style={{ maxWidth: "200px" }}>{text}</p>
                    <a href={props.href} className="btn btn-secondary">Ver mais informações</a>
                </div>
            </div>
        </div>
    );
}

type principalCardProps = {
    src: string;
    alt: string;
    title: string;
    descripton: string;
    itens: string;
    text: string
}


export function PrincipalCard(props: principalCardProps) {
    const listRef = useRef(null);

    function renderListItems(items: any[]) {
        return items.map((item, index) => <li key={index}>{item}</li>);
    }

    const { itens } = props;
    const arrayData = itens.includes(';') ? itens.split(';') : [itens];

    return (
        <div className="card card-lg">
            <img src={props.src} className="card-img-top card-img-top-lg" alt={props.alt} />
            <div className="card-body justify-content-center text-center bg-white">
                <h5 className="card-title card-title-lg my-3">{props.title}</h5>
                <div className="row">
                    <h5 className="card-title">Descrição</h5>
                    <p className="card-text text-dark">
                        {props.descripton}
                    </p>
                    <h5 className="card-title">Ingredientes</h5>
                    <p className="card-text text-dark">
                        <ul className='list-unstyled card-text text-dark' ref={listRef}>
                            {renderListItems(arrayData)}
                        </ul>
                    </p>
                    <h5 className="card-title">Modo de Preparo</h5>
                    <p className="card-text text-dark">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    );
}


export function CreateCard() {
    return (
        <div className="card text-center" style={{ width: "25rem" }}>
            <form action="" method="post">
                <img src={moreImage} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Nome</h5>
                    <div className="form-floating my-3">
                        <textarea className='form-control' name="nameDrink" id="nameDrink" />
                        <label htmlFor="nameDrink">Nome</label>
                    </div>
                    <h5 className="card-title">Descrição</h5>
                    <div className="form-floating my-3">
                        <textarea className='form-control' name="descriptionDrink" id="descriptionDrink" />
                        <label htmlFor="descriptionDrink">Descrição</label>
                    </div>
                    <h5 className="card-title">Ingredientes</h5>
                    <div className="form-floating my-3">
                        <textarea className='form-control' name="ingredientsDrink" id="ingredientsDrink" />
                        <label htmlFor="ingredientsDrink">Ingredientes</label>
                    </div>
                    <h5 className="card-title">Modo de Preparo</h5>
                    <div className="form-floating my-3">
                        <textarea className='form-control' name="howMakeDrink" id="howMakeDrink" />
                        <label htmlFor="howMakeDrink">Modo de Preparo</label>
                    </div>
                    <a href='/' className="btn btn-second text-uppercase">Salvar drink</a>
                </div>
            </form>
        </div>
    );
}

type horizontalCardProps = {
    src: string;
    alt: string;
    itens: string;
    text: string
}


export function HorizontalCard(props: horizontalCardProps) {
    const listRef = useRef(null);

    function renderListItems(items: any[]) {
        return items.map((item, index) => <li key={index}>{item}</li>);
    }

    const { itens } = props;
    const arrayData = itens.includes(';') ? itens.split(';') : [itens];

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={props.src} className="img-fluid rounded-4" alt={props.alt}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body rounded-4 mx-5">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="card-title">ingredientes</h5>
                                <p className="card-text">
                                    <ul className='list-unstyled' ref={listRef}>
                                        {renderListItems(arrayData)}
                                    </ul>
                                </p>
                            </div>
                            <div className="col-6">
                                <h5 className="card-title">Modo de Preparo</h5>
                                <p className="card-text">{props.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


type caroseulItensProps = {
    src: string;
    alt: string;
    text: string;
    href: string;
}

export function CaroseulItem(props: caroseulItensProps) {
    return (
        <div className="carousel-item active">
            <img src={props.src} className="caroseulImg" alt={props.alt} />
            <div className="container">
                <div className="carousel-caption">
                    <button className='btn btn-secondary'><a href={props.href} className="caroseulTxt">{props.text}</a></button>
                </div>
            </div>
        </div>
    );
}

type CaroseulProps = {
    image: string; href: string; alt: string; text: string;
    image2: string; href2: string; alt2: string; text2: string;
    image3: string; href3: string; alt3: string; text3: string;
    image4: string; href4: string; alt4: string; text4: string;
    
}


export function Caroseul(props: CaroseulProps) {
    return (
        <main>
            <section>
                <div id='carouselBox' className="container-fluid text-center bg-dark md">
                    <div id="myCarousel" className="carousel slide mt-5 mx-auto" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <CaroseulItem src={props.image} href={props.href} alt={props.alt} text={props.text} />
                            <CaroseulItem src={props.image2} href={props.href2} alt={props.alt2} text={props.text2} />
                            <CaroseulItem src={props.image3} href={props.href3} alt={props.alt3} text={props.text3} />
                            <CaroseulItem src={props.image4} href={props.href4} alt={props.alt4} text={props.text4} />
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
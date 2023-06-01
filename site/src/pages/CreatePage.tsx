import zombieImg from '../assets/drinks/zombie.jpg'
import bloodyMary from '../assets/drinks/bloodyMary.jpg'
import martinez from '../assets/drinks/martinez.jpg'
import pinacolada from '../assets/drinks/pinacolada.jpg' 
import sexBeach from '../assets/drinks/sexBeach.jpg' 
import tequilaSunrise from '../assets/drinks/tequilaSunrise.jpg' 
import whiskeySour from '../assets/drinks/whiskeySour.jpg'

/*Imports*/
import { Navbar, Footer  } from '../components/Model'
import {  CreateCard } from '../components/Cards'

export function CreatePage() {

    document.title = "Crie o  seu - Blues"
    
    return (
        <div>
            <Navbar />
            <section className="container-fluid p-5 mt-5 mb-0">
                <div className="row d-flex justify-content-center align-items-center">
                    <h1 className="title text-primary my-5">Compartilhar drink</h1>
                    <CreateCard />
                </div>
            </section>
            <Footer/>   
        </div>
    );
}
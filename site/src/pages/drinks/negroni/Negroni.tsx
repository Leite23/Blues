import { HorizontalCard } from '../../../components/Cards';
import { Navbar, Footer } from '../../../components/Model'
import { LongText } from '../../../components/Texts';

/*Drink Image*/
import negroni from '../../../assets/drinks/negroni/negroni.jpg'

export function Negroni() {

    document.title = "Negroni - Blues"

    return (
        <div>
            <Navbar />
            <section className="container-fluid my-5 p-5">
                <h1 className="title text-secondary m-5">Negroni</h1>
                <HorizontalCard src={negroni} alt={'negroni'}
                    itens={'30 ml de gin;30 ml de Campari;30 ml de vermute doce;Gelo;Uma fatia de laranja para decorar'}
                    text={'Encha um copo com gelo. Adicione o gin, o Campari e o vermute doce no copo. Misture bem os ingredientes com uma colher longa ou palito. Decore com uma fatia de laranja e sirva.'} />
            </section>
            <LongText title='Sobre o drink' text='O Negroni é um coquetel italiano clássico que foi criado em Florença na década de 1920. É um coquetel simples e sofisticado, feito com partes iguais de gin, Campari e vermute doce.

O sabor do Negroni é único, combinando o amargor do Campari com a doçura do vermute e a complexidade do gin. É um coquetel forte e equilibrado que é apreciado por muitos amantes de coquetéis em todo o mundo.

O Negroni é geralmente servido em um copo baixo com gelo e decorado com uma fatia de laranja. É um coquetel versátil que pode ser apreciado em qualquer ocasião, desde um jantar sofisticado até uma noite casual com amigos.

Se você gosta de coquetéis com sabor amargo, o Negroni é definitivamente uma opção que vale a pena experimentar. Com sua mistura equilibrada de sabores e sua história interessante, o Negroni é um dos coquetéis clássicos mais populares de todos os tempos.'/>
            <Footer />
        </div>
    );
}
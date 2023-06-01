import { HorizontalCard } from '../../../components/Cards';
import { Navbar, Footer } from '../../../components/Model'
import { LongText } from '../../../components/Texts';

/*Drink Image*/
import aperol from '../../../assets/drinks/aperol/aperol.jpg'

export function Aperol() {

    document.title = "Aperol - Blues"

    return (
        <div>
            <Navbar />
            <section className="container-fluid my-5 p-5">
                <h1 className="title text-secondary m-5">Aperol</h1>
                <HorizontalCard src={aperol} alt={'aperol'}
                    itens={'45 ml de vodka;90 ml de suco de tomate;15 ml de suco de limão fresco;2-3 gotas de molho Tabasco;2-3 gotas de molho Worcestershire;Uma pitada de sal e pimenta;Gelo;Uma fatia de limão e/ou aipo para decorar'}
                    text={'Encha um copo alto com gelo. Adicione a vodka, o suco de tomate e o suco de limão no copo. Adicione o molho Tabasco e o molho Worcestershire e misture bem.Tempere com uma pitada de sal e pimenta e misture novamente. Decore com uma fatia de limão e/ou uma haste de aipo e sirva'} />
            </section>
            <LongText title='Sobre o drink' text='O Bloody Mary é um coquetel de origem americana que se tornou popular na década de 1920. Acredita-se que o nome do coquetel tenha sido inspirado na rainha Maria I da Inglaterra, que ficou conhecida como Bloody Mary por causa de sua perseguição aos protestantes.

O coquetel é geralmente feito com vodka, suco de tomate, molho Worcestershire, molho Tabasco, sal e pimenta, embora haja muitas variações da receita. Algumas pessoas gostam de adicionar suco de limão, suco de lima, pimenta em pó, horseradish (raiz-forte) ou outros temperos para dar um toque extra de sabor.

O Bloody Mary é frequentemente servido como um brunch ou bebida para curar a ressaca, devido à sua mistura de suco de tomate e especiarias que podem ajudar a acalmar o estômago. É um coquetel versátil que pode ser apreciado em qualquer ocasião, desde um brunch preguiçoso até uma noite animada com amigos.'/>
            <Footer />
        </div>
    );
}
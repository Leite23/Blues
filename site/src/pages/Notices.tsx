import { Informations } from '../components/Information';
import { Navbar, Footer } from '../components/Model';

export function Notices() {

    document.title = "Curiosidades - Blues"

    return (
        <div>
            <Navbar />
            <section className="container-fluid mt-5 mb-3 p-5 mb-0">
                <h1 className="title m-5">Curiosidades sobre os drinks</h1>
                <Informations title='Sobre os whiskeys John Walker'
                    text='
                        nnhbububgubgvfvdrxsec6gt6fedscvbgvdcf6b8nhmnnh
                        '
                />
            </section>
            <section className="container-fluid mb-5 px-5">
                <Informations title='Sobre os whiskeys John Walker'
                    text='
                        Você é capaz de conquistar tudo o que deseja se mantiver o foco e a determinação no seu caminho.
                        '
                />
            </section>
            <section className="container-fluid mb-5 px-5">
                <Informations title='Sobre os whiskeys John Walker'
                    text='
                        Você é capaz de conquistar tudo o que deseja se mantiver o foco e a determinação no seu caminho.
                        '
                />
            </section>
            <section className="container-fluid mb-5 px-5">
                <Informations title='Sobre os whiskeys John Walker'
                    text='
                        Você é capaz de conquistar tudo o que deseja se mantiver o foco e a determinação no seu caminho.
                        '
                />
            </section>
            <section className="container-fluid mb-5 px-5">
                <Informations title='Sobre os whiskeys John Walker'
                    text='
                        Você é capaz de conquistar tudo o que deseja se mantiver o foco e a determinação no seu caminho.
                        '
                />
            </section>
            <Footer />
        </div>
    );
}
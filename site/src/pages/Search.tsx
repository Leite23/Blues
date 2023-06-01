/*Imports*/
import { useState } from 'react';
import { Navbar, Footer } from '../components/Model'
import SearchModule from './SearchModule'

export function Search() {

    document.title = "Pesquisa - Blues"

    return (
        <div>
            <Navbar />
            <div className="continer-fluid m-5 p-5">
                <div className="row my-5 py-5">
                    <h1 className="title my-5">Procurar da Pesquisa</h1>
                    <SearchModule/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

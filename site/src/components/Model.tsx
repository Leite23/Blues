import logoSlim from '../assets/logoSlim.svg'

export function Navbar() {
    return ( 
        <header className="container-fluid position-fixed top-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img id="headerLogo" src={logoSlim} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-absolute top-0 end-0 mt-3 me-5"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/"><i className="bi bi-house-fill"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#popular"><i className="bi bi-stars"></i>  populares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/create"><i className="bi bi-share-fill"></i> compartilhar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search"><i className="bi bi-search"></i> procurar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/notices"><i className="bi bi-puzzle-fill"></i> Curiosidades</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function Footer() {
    return (
        <div className="container-fluid bg-dark rounded-0">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={logoSlim} id="logoFooter" alt="logo" />
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2023 Blues - The Drink Society</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter text-white"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram text-white"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-tiktok text-white"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

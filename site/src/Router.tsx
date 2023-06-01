import { Route, Routes } from "react-router-dom";

/*Min Pages*/
import { CreatePage } from "./pages/CreatePage";
import { Home } from './pages/Home';
import { Notices } from "./pages/Notices";
import { Search } from "./pages/Search";

/*Drink Groups*/
import { Whiskeys } from "./pages/whiskeys/WhiskeysHome";

/*Drinks*/
import { Aperol } from "./pages/drinks/aperol/Aperol";
import { BloodyMary } from "./pages/drinks/bloodymary/BloodyMary";
import { Negroni } from "./pages/drinks/negroni/Negroni";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whiskeys" element={<Whiskeys />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<CreatePage />} />
            {/*Drinks*/}
            <Route path="/drinks/aperol" element={<Aperol />} />
            <Route path="/drinks/bloodyMary" element={<BloodyMary />} />
            <Route path="/drinks/negroni" element={<Negroni />} />

        </Routes>
    )
}
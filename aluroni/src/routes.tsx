import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaPadrao from 'components/PaginaPadrao/PaginaPadrao';
import Inicio from './pages/Inicio/Inicio';
import Cardapio from './pages/Cardapio/Cardapio';
import Menu from "components/Menu/Menu";
import styles from "./Routes.module.scss";
import Sobre from "pages/Sobre/Sobre";
import Footer from "components/Footer/Footer";
import NotFound from "pages/NotFound/NotFound";
import Prato from "pages/Prato/Prato";

// const AppRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <> <Menu/> <Inicio /> </>,
//         errorElement:
//             <div style={{ minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
//                 <TbError404 size={200} color='red' />
//                 <h1 style={{ textAlign: 'center' }}>
//                     Sorry... page not found
//                 </h1>
//             </div>,
//     },
//     {
//         path: "/cardapio",
//         element: <Cardapio />
//     },
// ]);

// export default AppRouter;

const AppRouter = () => {
    return (
        // <main className={`${styles.Main}` /* ${darkMode && styles['Main--darkMode']}` */}>
        <main className="container">
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path="cardapio" element={<Cardapio />} />
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path="prato/:id" element={<Prato />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
};

export default AppRouter;

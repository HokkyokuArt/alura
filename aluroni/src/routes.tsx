import { createBrowserRouter } from "react-router-dom";
import Inicio from './pages/Inicio/Inicio';
import Cardapio from './pages/Cardapio/Cardapio';
import { TbError404 } from 'react-icons/tb';

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />,
        errorElement:
            <div style={{ minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <TbError404 size={200} color='red' />
                <h1 style={{ textAlign: 'center' }}>
                    Sorry... page not found
                </h1>
            </div>,
    },
    {
        path: "/cardapio",
        element: <Cardapio />
    },
]);

export default AppRouter;
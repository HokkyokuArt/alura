import { TbError404 } from 'react-icons/tb';


const MyNotFound = () => {
    return (
        <div style={{ minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
            <TbError404 size={200} color='red' />
            <h1 style={{ textAlign: 'center' }}>
                Sorry... page not found
            </h1>
        </div>
    );
};

export default MyNotFound;
/*
Ejemplo Hooks:
useState()
useContext()
*/

import React, { useState, useContext } from 'react';

/*
Componente 1 dispone de un contexto que tendra un valor que recibe desde el padre
*/

const miContexto = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacia que va a rellenarse con los datos del contexto padre

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>        
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // Creamos el estado de este componente

    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSessionData(
            {
                token: '456789',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
        {/* Todo lo que esta aqui dentro puede leer los datos de sessionData */}
        {/* Ademas, si se actualiza, los componentes de aqui, tambien lo actualiza */}
        <h1>Ejemplo de useState y useContext</h1>
        <Componente1 />
        <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    )
}


/* 
Uso del Hook useState
Crea un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0

    // Valor inicial para una persona
    const personaInicial = {
        nombre : 'Robert',
        email: 'rmendoza@gmail.com'
    }

    // Queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente
    // const [nombreVariable, funcionParaCambia] = useState(valorInicial)

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /*
    Funcion para actualizar el estado privado que contiene el contador
    */

    function incrementarContador() {
        // funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /*
    Funcion para actuaizar el estado de persona en el componente
    */

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Gabriel',
                email: 'gtovar@gmail.com'
            }
        )
    }



    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR: { contador }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h4>EMAIL: { persona.email }</h4>
            {/* Bloque de botones para actualziar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Atualizar persona</button>
        </div>
    );
}

export default Ejemplo1;

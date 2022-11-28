/**
 * Ejemplo de uso del metodo componenteWillUnmount para componente clase y
 * ejemplo de uso de hooks para componente funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                WillUnmount
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        // Aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        }
    }, [])

    return (
        <div>
            WillUnmount
        </div>
    );
}


import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h2>
                Apellido: { contact.lName }
            </h2>
            <h3>
                Correo: { contact.email }
            </h3>
            <h3>
                Conectado: { contact.connected ? 'Contacto en Línea':'Contacto no Disponible' }
            </h3>
        </div>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    name: PropTypes.string,
    lName: PropTypes.string,
    email: PropTypes.string,
    connected: PropTypes.bool,
};


export default ContactComponent;

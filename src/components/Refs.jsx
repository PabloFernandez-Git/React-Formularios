import React, { Component, Fragment } from 'react';

class Refs extends Component {
    
    handleFocus = () => {
        document.getElementById('input').focus()
    }

    render() {
        return (
            <Fragment>
                <input type="text" id="input"/>        
                <button onClick={this.handleFocus}>Focus</button>
            </Fragment>
        );
    }
}

export default Refs;


/*
¿Por qué usar refs?

Existen dos formas de controlar formularios en React.

A traves de los input controlados y a traves de los input no controlados.

Los inputs controlados se gestionan con el estado.
Los inputs no controlados se gestionan con las refs.

Podemos seleccionar el elemento y hacer foco sobre el usando 

handleFocus = () => {
    document.getElementById('input').focus()
}

pero esta manera presenta algunos inconvenientes por que 'document.getElementById' es un meotodo del DOM y React no trabaja sobre el DOM.

React trabaja sobre el virtual DOM.

Si este elemento lo desmontamos y necesitamos acceder a el de alguna forma, este metodo 'document.getElementById' ya no va a funcionar porque no existe ningun elemento con el id que estamos buscando.

Por lo tanto React creo algo que se denominan Refs (referencias).

Las refs son el equivalente a 'document.getElementById' pero en el virtual DOM.




*/
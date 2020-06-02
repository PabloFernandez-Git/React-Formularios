import React, { Component, Fragment, createRef } from 'react';

class Refs extends Component {

    constructor(){
        super()
        this.inputText = createRef()
    }

    handleFocus = () => {
        this.inputText.current.focus()
    }

    render() {
        return (
            <Fragment>
                <input type="text" ref={this.inputText} />        
                <button onClick={this.handleFocus}>Focus</button>
            </Fragment>
        );
    }
}

export default Refs;


/*
Usando las refs

Para crear la referencia podemos usar 'this.inputText = React.createRef()'
o
destructurarlo (pasar 'createRef') en el import y luego usar 'this.inputText = createRef()'

Es preferible destructurar para tener un codigo mas limpio.


No es obligatorio crear la referencia con un constructor.

Si tenemos el metodo constructor debemos crear la referencia dentro de este:

constructor(){
    super()
    this.inputText = createRef()
}

pero si no tenemos el metodo constructor podemos crear la referencia de la siguiente manera:

inputText = createRef()



*/
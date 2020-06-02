import React, { Component, createRef } from 'react'
import './form.css'

class Form extends Component {

    /* constructor(props) {
        super(props);
        this.state = {};
    } */

    name = createRef()

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.name.current.value)
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit} >
                <h1>Forms</h1>
                <div className="form__field">
                    <label className="form__label" htmlFor="name">Name</label>
                    <input 
                        className="form__input" 
                        id="name" 
                        ref={this.name} 
                        type="text" 
                    />
                </div>
                {/* <div className="form__field">
                    <label className="form__label form__label--radio" htmlFor="man">Man</label>
                    <input className="form__input" type="radio" id="man" name="gender" />

                    <label className="form__label form__label--radio" htmlFor="woman">Woman</label>
                    <input className="form__input" type="radio" id="woman" name="gender" />

                    <label className="form__label form__label--radio" htmlFor="other">Other</label>
                    <input className="form__input" type="radio" id="other" name="gender" />
                </div>
                <div className="form__field">
                    <label className="form__label" htmlFor="languaje">Language</label>
                    <select name="language" id="language">
                        <option value="es">Spanish</option>
                        <option value="en">English</option>
                    </select>
                </div>
                <div className="form__field">
                    <label className="form__label" htmlFor="terms">Terms and conditions</label>
                    <input className="form__input" type="checkbox" id="other" name="gender" />
                </div> */}
                <input className="form__submit" type="submit" value="send" />
            </form >
        );
    }
}

export default Form;


/*
Controlando input con refs

No es la forma mas habitual, pero es valida y funciona.
La forma mas habitual es controlar el formulario con el estado (state).


Crear una referencia para el 'name'

name = createRef()


Evitar que la pagina se recarge al clickear en submit

<form className="form" onSubmit={this.handleSubmit}></form>

handleSubmit = (e) => {
    e.preventDefault()
}

Obtener el valor del formulario

handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.name.current.value)
}



*/
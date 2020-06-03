import React, { Component, Fragment } from 'react'
import './form.css'

class Form extends Component {

    state = {
        name: ''
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name)
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <Fragment>
                <form className="form" onSubmit={this.handleSubmit} >
                    <h1>Forms</h1>
                    <div className="form__field">
                        <label className="form__label" htmlFor="name">Name</label>
                        <input 
                            className="form__input" 
                            id="name" 
                            onChange={this.handleChange} 
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
                    <p>{JSON.stringify(this.state)}</p>
                </form >
            </Fragment>
        );
    }
}

export default Form;


/*
Controlando input con state

El state vive en el virtual DOM, las refs viven en el DOM.
El objetivo de trabajar con React es acceder al DOM lo menos posible para ahorrar recursos y conseguir hacer la aplicacion lo mas optima posible.
Como el state vive en el virtual DOM no hay ningun problema con borrar y modificar el estado porque se realiza sobre el virtual DOM pero si esto mismo lo hicieramos con las refs ralentizariamos nuestra aplicacion. 


Usando el state

La propiedad que tenemos que usar en el input es onChange={this.handleChange} porque cuando esto cambie vamos a querer manejar este evento con handleChange.



Dato
En el HTML no podemos renderizar objetos.
Para renderizar objetos debemos usar 'JSON.stringify' para ver el objeto a modo de string.

<p>{JSON.stringify(this.state)}</p>

*/
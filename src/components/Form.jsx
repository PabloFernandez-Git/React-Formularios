import React, { Component, Fragment } from 'react'
import './form.css'

class Form extends Component {

    state = {
        name: '',
        gender: ''
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, 
        })
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
                            name="name" 
                            onChange={this.handleChange}
                            type="text" 
                        />
                    </div>
                    <div className="form__field">
                        <label className="form__label form__label--radio" htmlFor="man">Man</label>
                        <input 
                            className="form__input" 
                            id="man" 
                            name="gender"
                            onChange={this.handleChange}
                            type="radio" 
                            value="man" 
                        />

                        <label className="form__label form__label--radio" htmlFor="woman">Woman</label>
                        <input 
                            className="form__input" 
                            id="woman" 
                            name="gender"
                            onChange={this.handleChange}
                            type="radio" 
                            value="woman" 
                        />

                        <label className="form__label form__label--radio" htmlFor="other">Other</label>
                        <input 
                            className="form__input" 
                            id="other" 
                            name="gender"
                            onChange={this.handleChange}
                            type="radio" 
                            value="other" 
                        />
                    </div>
                    {/* <div className="form__field">
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
Controlando radio button con state

Como actualizar el estado cuando tenemos varios elementos (inputs)? (Ya sean type text/radio)

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value, 
    })
}

De esta forma cuando escribimos en el nombre se actualiza el nombre y cuando marcamos el genero se marca el genero.

De esta forma podemos trabajar con la cantidad de campos que necesitemos:

[e.target.name]: e.target.value,

Usando esa linea de codigo se actualiza cada uno de los valores que necesitemos usar.

El 'name' del formulario debe ser el mismo que el del 'state' 


*/
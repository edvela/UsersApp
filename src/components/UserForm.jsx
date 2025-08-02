import { useState } from "react";

const initialUserForm = {
    username: '',
    password: '',
    email: ''
}

export const UserForm = () => {

    const onInputChange = ({target}) => {
        const {name, value} = target
        setUserForm({
            ...userForm,
            [name]: value
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        
        // save

        //clear
        if(!username || !password || !email) {
            console.log("Formularuio inválido")
            return
        }
        setUserForm(initialUserForm);
        console.log("Guardando...")

    }


    const [userForm, setUserForm] = useState(initialUserForm);
    const { username, password, email} = userForm;

    return (
        <>
            <p>Formulario de usuario</p>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control my-3 w-75"
                    placeholder="Username"
                    name="username"
                    onChange={onInputChange}
                    value={username}
                />
                <input
                    type="password"
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    onChange={onInputChange}
                    value={password}
                />

                <input
                    //type="email"
                    className="form-control my-3 w-75"
                    placeholder="Email"
                    name="email"
                    onChange={onInputChange}
                    value={email}
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                >Crear</button>

            </form>
        </>
    )
}
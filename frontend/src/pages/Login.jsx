import React, {useState} from 'react'

const Login = () => {
    const [formData, setFormData] = useState({  //state variables for the email and password using useState hook
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password } = formData;  // destructuring email and password 

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })  //using setFormData to update each part seperatly

    const onSubmit = async e => {
        e.preventDefault()
    }

    return (                     //basically saying when it's finally submitted to send this back
        <form onSubmit={onSubmit}>       
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={onChange} required ></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={onChange} required ></input>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login
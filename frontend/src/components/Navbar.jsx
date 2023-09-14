import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Atlas-t</h1> {/*home page link */}
                </Link>
                <Link to="/login">
                    <h1>Login</h1> {/*login page link */}
                </Link>
                <Link to="/register">
                    <h1>Register</h1> {/*register page link */}
                </Link>

            </div>
        </header>
    )
}

export default Navbar
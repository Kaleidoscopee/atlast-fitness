import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <ul>
                    <li>
                        <Link to="/"><h1>Atlas-t</h1> {/*home page link */}</Link>
                    </li>
                    <li>
                        <Link to="/login"><h1>Atlas-t</h1> {/*home page link */}</Link>
                    </li>
                    <li>
                        <Link to="/register"><h1>Atlas-t</h1> {/*home page link */}</Link>
                    </li>
                    <li>
                        <Link to="/workouts"><h1>Atlas-t</h1> {/*home page link */}</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
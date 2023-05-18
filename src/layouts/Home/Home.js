import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <main>
            <div className="title">
                <u>MEDITECHCARE</u>
            </div>
            <div className="loginHeader">
                <p>Login as -</p>
            </div>
            <div className="loginOption">
                <Link to="/authentication/sign-in">
                    <button>User</button>
                </Link>
                <Link to="/authentication/sign-in-doc">
                    <button>Doctor</button>
                </Link>
                <Link to="/authentication/sign-in-hos">
                    <button>Hospital</button>
                </Link>
                <Link to="/authentication/sign-in-hos">
                    <button>insurer</button>
                </Link>
                {/* <Link to="/authentication/sign-in"></Link> */}
            </div>
        </main>
    )
}

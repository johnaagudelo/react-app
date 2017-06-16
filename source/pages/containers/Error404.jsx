import React, { Component } from 'react'
import { Link } from 'react-router'

class Error404 extends Component {
    render() {
        return (
            <section name="error404">
                <h1>Error404</h1>
                <Link to="/home">
                    Go to home
                </Link>
                <Link to="/about">
                    Go to about
                </Link>
            </section>
        )
    }
}
export default Error404
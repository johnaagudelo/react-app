import React, { Component } from 'react'
import { Link } from 'react-router'

class Profile extends Component {
    render() {
        return (
            <section name="profile">
                <h1>Profile</h1>
                <Link to="/home">
                    Go to home
                </Link>
                <Link to="/random">
                    Go to ramdom
                </Link>
            </section>
        )
    }
}
export default Profile
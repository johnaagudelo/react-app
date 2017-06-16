import React from 'react'
//Match Define que tiene que hacer en cada ruta
//Miss Define que hace cuendo no encuentre la ruta jemplo 404
//Link moverse entre rutas 
import { Match, Miss, Link } from 'react-router'

import Home from './Home.jsx'
import Post from './Post.jsx'
import Profile from './Profile.jsx'
import Error404 from './Error404.jsx'

function Pages() {
    return (
        <main role="aplication">
            <Match
                pattern="/"
                exactly
                component={Home}
            />
            <Match
                pattern="/post/:id"
                exactly
                component={Post}
            />
             <Match
                pattern="/user/:id"
                exactly
                component={Profile}
            />
            <Miss component={Error404} />
        </main>
    )
}

export default Pages

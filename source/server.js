import http from 'http'
import React from 'react'
//modulo server para renderizar react desde el server
//renderToString renderizar la aplicacion en un string con html
import { renderToString } from 'react-dom/server'

//Manejador de peticiones http
function requestHandle(request, response){
    const html = renderToString(
        React.DOM.h1(null, 'hola')
    );

    response.write(html)
    response.end()
}

const server = http.createServer(requestHandle)
server.listen(3000)


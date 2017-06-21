import http from 'http'
import React from 'react'
//modulo server para renderizar react desde el server
//renderToString renderizar la aplicacion en un string con html

//renderToStaticMarkup renderizar sin los ids, data react root, html estatico
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

//handle router 

import { ServerRouter, createServerRenderContext } from 'react-router'
import Pages from './pages/containers/Page.jsx'
import Layout from './pages/components/Layout.jsx'


//Manejador de peticiones http
function requestHandle(request, response) {
    //creamos el contexto del server render
    const context = createServerRenderContext()

    //Renderiamos el componente 
    let html = renderToString(
        <ServerRouter location={request.url} context={context}>
            <Pages />
        </ServerRouter>
    )

    //brinda informacion de lo que esta pasando
    const result = context.getResult()
    //Siempre que el content type sea html 
    response.setHeader('Content-Type', 'text/html')

    //Si existe un redirect
    if (result.redirect) {
        //Hacemos el redirect
        response.writeHead(301, {
            Location: result.redirect.pathname
        })
    }

    //Si existe un 404
    if (result.missed) {
        response.writeHead(404)

        //Volvemos hacer el render para que renderice la pagina 404
        html = renderToString(
            <ServerRouter location={request.url} context={context}>
                <Pages />
            </ServerRouter>
        )

    }
    response.write(
        renderToStaticMarkup(
            <Layout
                title="Aplicación"
                content={html}
            />
        )
    )
    response.end()
}

const server = http.createServer(requestHandle)
server.listen(3000)


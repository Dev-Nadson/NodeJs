import http from "node:http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"
const server = http.createServer(async (request, response) => {
    const { method, url } = request

    await jsonBodyHandler(request, response)
    if (method === "GET" && url === "/products") {
        console.log(response.body)
        return response.end("Lista de Produtos")
    }

    if (method === "POST" && url === "/products") {
        console.log(response.body)
        return response.end(JSON.stringify(request.body))
    }
    return response.writeHead(404).end("Not Found")
})

server.listen(3333)
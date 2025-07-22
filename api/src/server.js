import http from "node:http"

const server = http.createServer((request, response) => {
    const { method, url } = request

    if (method === "GET" && url === "/products") {
        return response.end("Lista de Produtos")
    }
    return response.writeHead(404).end("Not Found")
})

server.listen(3333)
import http from "node:http"

const server = http.createServer((request, response) => {
    return response.end("Hello World! Ao vivo")
})

server.listen(3333)
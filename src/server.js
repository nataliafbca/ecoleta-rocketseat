const express = require("express")
const server = express();

//configurar pasta pública
server.use(express.static("public"))

// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})

// ligar o servidor
server.listen(3000)
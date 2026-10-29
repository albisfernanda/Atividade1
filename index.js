const express = require("express")
const app = express()
const PORT = 3030

app.get("/", (req, res) => {
    res.send(`
        <h1>Catálogo de Heróis</h1>
        <p>Bem-vindos(as) ao universo dos heróis da Marvel e da DC.</p>

        <a href="/marvel">Marvel</a>
        <a href="/dc">DC</a>

        <hr>

        <a href="/personagem/marvel/Thor">Thor</a>
        <a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a>
        <a href="/personagem/dc/Batman">Batman</a>
        <a href="/personagem/dc/Superman">Superman</a>
    `)
})

app.get("/marvel", (req, res) => {
    res.send(`
        <h1>Marvel</h1>
        <p>Universo de heróis da Marvel.</p>
        <a href="/personagem/marvel/Thor">Thor</a>
        <a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a>
        <a href="/">Voltar</a>
    `)
})

app.get("/dc", (req, res) => {
    res.send(`
        <h1>DC</h1>
        <p>Universo de heróis da DC.</p>
        <a href="/personagem/dc/Batman">Batman</a>
        <a href="/personagem/dc/Superman">Superman</a>
        <a href="/">Voltar</a>
    `)
})

app.get("/personagem/:empresa/:nome", (req, res) => {
    const { empresa, nome } = req.params
    res.send(`Empresa: ${empresa} | Personagem: ${nome}`)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
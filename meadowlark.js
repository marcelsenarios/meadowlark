const express = require('express')
const expressHandlebars = { ExpressHandlebars } = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3000

const fortunes = [
    "Não desista, na verdade nem comece",
    "Se tudo for pra dar errado, sem pvai dar errado",
    "Corra, corra e continue correndo, mas nunca vai sair do lugar",
    "A verdade nunca prevalece, seja canalha!"
]

app.use(express.static(__dirname + '/public'))
// configura o view engine Handlebars
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars')

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    const index = Math.floor(Math.random() * fortunes.length)
    const randomFortune = fortunes[index]
    res.render('about', { fortune: randomFortune })
})


// página 404 personalizada
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

// página 500 personalizada
app.use((err, req, res, next) => {
    console.log(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(`Express started on http://localhost:${port} press Ctrl+C to terminate`))
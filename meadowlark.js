const fortune = require('./lib/fortune')
const express = require('express')
const expressHandlebars = { ExpressHandlebars } = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
// configura o view engine Handlebars
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars')

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune() })
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
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const weather = require('./utils/weather.js');

const app = express();
var port = process.env.PORT || 1000;
// Define path for express config
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'Akhtar'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Altamash'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Altamash'
    });
})

app.get("/weather", (req, res) => {
    if(!req.query.address) {
        return res.send ({
            eroor: 'Please provide an address'
        })
    }
    weather(req.query.address, (err, {current, location} = {}) => {
                if(err) {
                    return res.send ({
                        error: 'Please provide an address'
                    })
                } 
                res.send({
                    address: req.query.address,
                    location: location,
                    current : current
                });
            })
})

// app.get('/products', (req, res) => {
//     if(!req.query.search) {
//         return res.send({
//             error: 'you must provide search'
//         })
//     }
//     console.log(req.query.search);
//     res.send({
//         products: []
//     })
// })






//for 404 path..
app.get('/help/*', (req, res) =>  {
    res.render('page404', {
        title: 'Article Not found',
        name: 'Robot'
    });
});


app.get('*', (req, res) =>  {
    res.render('page404', {
        title: 'Page not found',
        name: 'Robot'
    });
});


app.listen(port, () => {
    console.log("server started at " + port);
})
const express = require('express');
const app = express();
const paginate = require('express-paginate');

//Aquí pueden colocar las rutas de las APIs
const movieApiRoutes = require ('./routes/api.v1/movies.routes');
const genreApiRoutes = require ('./routes/api.v1/genres.routes');

app.use(express.json());
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));


app.use(paginate.middleware(8,50));

app.use('/api/v1/movies',movieApiRoutes)
app.use('/api/v1/genres',genreApiRoutes)

app.use('*',(req,res) => res.status(404).json({
    ok: false,
    status: 404,
    error: 'Not found'
}))
//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));

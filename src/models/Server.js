const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            usuarios: '/api/usuarios',
            carts: '/api/carts',
            view: '/api/view',
            session: '/api/session',  
        }


        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        this.app.engine('.hbs', engine({ extname: '.hbs' }));
        this.app.set('view engine', '.hbs');
        this.app.set('views', path.join(__dirname, "/views"));

        // Directorio Público
        this.app.use(express.static('public'));

        //configuracion de sesiones
        app.use(session({
            store: MongoStore.create({
                mongoUrl: config.mongo.url
            }),
            secret: config.server.secretSession,
            resave: true,
            saveUninitialized: true
        }));

        //configuracion de passport
        initializePassport();
        this.app.use(passport.initialize());
        this.app.use(passport.session());

    }

    routes() {

        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.carts, require('../routes/carts'));
        this.app.use(this.paths.view, require('../routes/view')); 
        this.app.use(this.paths.sessions,require('../routes/session'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;

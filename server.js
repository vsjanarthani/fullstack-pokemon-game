const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main'});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const socketServer = http.createServer(app);
const io = socketio(socketServer);
const PORT = process.env.PORT || 5000;

const sess = {
  secret: process.env.SESSION_KEY,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));


// Run when client connects
let pokeTeams = {};
io.on('connection', connected);

function connected(socket) {
    socket.on('newUser', data => {
      console.log(`New client connected, ${socket.id}`);
      pokeTeams[socket.id] = data;
      console.log(`Current number of pokemon players: ${Object.keys(pokeTeams).length}`);
      io.emit('updatedUsers', pokeTeams);
    });

    socket.on('disconnect', () => {
      delete pokeTeams[socket.id];
      console.log(`Goodbye client with id: ${socket.id}`);
      console.log(`Current number of pokemon players: ${Object.keys(pokeTeams).length}`);
      io.emit('updatedUsers', pokeTeams);
    });
  };
  

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false}).then(() => {
  socketServer.listen(PORT, () => console.log(`Now listening to ${PORT}`));
});
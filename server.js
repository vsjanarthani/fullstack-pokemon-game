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
io.on('connection', socket => {
  console.log('New web socket connection..');

  // msg for the user
  socket.emit('message', 'Good Job! You are now connected to socket.io');
  // Broadcast when a user connects (visible to all but the user)
  socket.broadcast.emit('message', `A user has joined the room`);
  // msg on disconnect
  socket.on('disconnect', () => {
    io.emit('message', `A User has left the room`);
  });
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false}).then(() => {
  socketServer.listen(PORT, () => console.log(`Now listening to ${PORT}`));
});
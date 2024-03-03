const express = require('express');
const cors = require('cors');
const { sendEmail } = require('./src/mailer');
const reservaRoutes = require('./src/routes/reservaRoutes')
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

//Base de datos
var url = 'mongodb://localhost:27017/reservas';


//Metodo para enviar correos

app.post('/api/send-email', (req, res) => {
  const { nombre, apellido, fechaEntrada, fechaSalida, correo, titulo } = req.body;
  const data = { nombre, apellido, fechaEntrada, fechaSalida, correo, titulo };
  sendEmail(data);
  res.send('Email enviado');
});

//Metodo para guardar reservas
app.use('/api/reservas', reservaRoutes);

// Conexión a MongoDB y inicio del servidor
mongoose.connect(url).then(() => {
  console.log(`Conexion a la bd exitosa`); // Mensaje de éxito al conectarse a la base de datos
  app.listen(port, () => {
      console.log(`Conectado en puerto: ` + port); // Mensaje de éxito al iniciar el servidor
  });
}).catch(error => {
  console.error(`Error al conectar a la base de datos: ${error}`); // Mensaje de error en caso de fallo al conectar a la base de datos
});


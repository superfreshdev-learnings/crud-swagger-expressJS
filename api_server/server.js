const express = require('express');
const userRoutes = require('./routes/users');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-ui');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
  console.log(`📘 Swagger UI verfügbar unter http://localhost:${PORT}/api-docs`);
});


app.get('/', (req,res) => {
  res.send("Hello World! - Welcome on Express")
})

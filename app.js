const express = require('express')
const app = express();
const PORT = 3000;

// Sevidor de arquivos estáticos: HTML, CSS, JS, imagens...
app.use(express.static('./'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`)
});

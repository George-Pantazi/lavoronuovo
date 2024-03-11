const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Per servire file statici come immagini e CSS
app.set('view engine', 'pug'); // Usa Pug come motore di template

function getProfileDataPizza(nome) {
  return {
    nome: nome,
    tipo: '30',
    ingredienti: 'Una breve biografia del profilo...',
    
  };
}

function getProfileDataKebab(nome) {
  return {
    nome: nome,
    tipo: '30',
    ingredienti: 'Una breve biografia del profilo...',
    
  };
}

function getProfileDataHamburger(nome) {
  return {
    nome: nome,
    tipo: '30',
    ingredienti: 'Una breve biografia del profilo...',
    
  };
}



// Homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Sito Profili' });
});

// Pagina dei profili
app.get('/profili', (req, res) => {
  res.render('profili', { title: 'Profili' });
});

// Pagina del profilo della persona
app.get('/profili/:persona', (req, res) => {
  const persona = req.params.persona;
  res.render('persona', { title: `Profilo di ${persona}`, persona });
});

app.get('/profilo/:nome', (req, res) => {
  const nome = req.params.nome;
  const profilo = getProfileDataPizza(nome);
  const profilo2 = getProfileDataKebab(nome);
  const profilo3 = getProfileDataHamburger(nome);
 
  
  res.render('profilo', profilo);
  res.render('profilo', profilo2);
  res.render('profilo', profilo3);
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
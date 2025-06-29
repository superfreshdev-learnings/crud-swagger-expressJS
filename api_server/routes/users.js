const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Max Mustermann' },
  { id: 2, name: 'Erika Musterfrau' },
  { id: 3, name: 'Elon Musk' },
  { id: 4, name: 'Jeff Bezos' },
  { id: 5, name: 'Anja Frauenheld' }
];
let nextId = 6;

// Alle Benutzer abrufen
router.get('/', (req, res) => {
  res.json(users);
});

// Benutzer nach ID abrufen
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Benutzer nicht gefunden' });
  res.json(user);
});

// Benutzer erstellen
router.post('/', (req, res) => {
  const user = { id: nextId++, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

// Benutzer aktualisieren
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Benutzer nicht gefunden' });
  user.name = req.body.name;
  res.json(user);
});

// Benutzer löschen
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Benutzer nicht gefunden' });
  users.splice(index, 1);
  res.status(204).send();
});

module.exports = router;

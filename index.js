const express = require('express');
const app = express();
const { letsGoTeam, teamSucks } = require('./fandom.js');
const { theAce, theDud, score } = require('./players.js');
const fs = require('fs');

// Set Up Routes
// Core Routes
app.get('/read', (req, res) => {
  let element = req.query.something;
  fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
    if (error) {
      return res.json({
        message: 'There is an issue, try again later...'
      });
    } else {
      return res.json({
        message: data
      });
    }
  })
})

app.get('/marbles', (req, res) => {
  return res.json({ message: "Let's get Marbling"});
})
// Local Routes
app.get('/letsgoteam/:team', (req, res) => {
  let answer = letsGoTeam(String(req.params.team));
  return res.json({
    answer: answer
  });
});

app.get('/teamsucks/:team', (req, res) => {
  let answer = teamSucks(String(req.params.team));
  return res.json({
    answer: answer
  });
});

app.get('/ace/:player', (req, res) => {
  let answer = theAce(String(req.params.player));
  return res.json({ answer: answer});
})

app.get('/dud/:player', (req, res) => {
  let answer = theDud(String(req.params.player));
  return res.json({ answer: answer});
})

app.get('/score/:player/:score', (req, res) => {
  let answer = score(String(req.params.player), req.params.score);
  return res.json({ answer: answer});
})
// Third-Party Routes
app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to the World Marbles Championship App'
  });
})

// Port setup and listener
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('Server is running on PORT', PORT);
})

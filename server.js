const express = require('express');
const cors = require('cors');

console.log('server.js file is running');

const app = express();
 app.use(cors());
 
app.get('/', (req, res) => {
  res.send('Timestamp Microservice');
});

function handleDate(req, res) {
  const dateInput = req.params.date;
  let date;

  if (!dateInput) {
    date = new Date();
  } else if (!isNaN(dateInput)) {
    date = new Date(parseInt(dateInput));
  } else {
    date = new Date(dateInput);
  }

  if (date.toString() === 'Invalid Date') {
    res.json({ error: 'Invalid Date' });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }
}

app.get('/api/:date', handleDate);
app.get('/api', handleDate); 



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
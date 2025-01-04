const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      //Should handle error here. For example, return a 500 error
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      //Handle the case where user is not found
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));
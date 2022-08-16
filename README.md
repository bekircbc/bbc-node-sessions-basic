## login

-- add to server.js

      const users = [
    {
        username: 'ja',
        firstName: 'Jörg',
        lastName: 'Ackermann',
        email: 'ja@mail.com'
    },
    {
        username: 'ac',
        firstName: 'Angelika',
        lastName: 'Carstense',
        email: 'ac@mail.com'
    }
    ];


      app.get('/login/:username', (req, res) => {
      const user = users.find((user) => user.username === req.params.username);
       if (user) {
        res.send(`User identified: ${JSON.stringify(user)}`);
      } else {
        res.status(500).send('bad login');
      }
      });

## testing LOGIN

-- test login with postmann, test.rest or requests.http

        @url = http://localhost:3024
        ### LOGIN JOERG
        GET {{url}}/login/ja

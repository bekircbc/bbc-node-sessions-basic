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

-- for sessions and cookies

        import session from 'express-session';
        import cookieParser from 'cookie-parser';

        app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: 'tempsecret'
    })

        );

        app.use(cookieParser());


        app.get("/login/:username", (req, res) => {
          const user = users.find((user) => user.username === req.params.username);
       if (user) {
    req.session.user = user;
    req.session.cookie.expires = new Date(Date.now() + 30000);
    req.session.save();
    res.send(`User logged in: ${JSON.stringify(user)}`);
     } else {
    res.status(500).send("bad login");
     }
      });

-- getting current user data

        app.get('/current-user', (req, res) => {
    if (req.session.user) {
        res.send(req.session.user);
    } else {
        res.send('no user logged in');
    }
    });

-- logout user

      app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.send('User logged out');
    });
      });

## testing LOGIN

-- test login with postmann, test.rest or requests.http

        @url = http://localhost:3024
        ### LOGIN JOERG
        GET {{url}}/login/ja

-- testing LOGOUT

        ### LOGOUT
        GET {{url}}/logout

-- testing current-user

        ### GET LOGGED IN USER
        GET {{url}}/current-user

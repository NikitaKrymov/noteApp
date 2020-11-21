const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const mongoDBClient = require('./utils/mongoDB')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

require('./routes/index')(app, mongoDBClient);

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static('client/build'));    
    app.get('*', (req: any, res: any) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
}

const PORT = process.env.PORT || 6000;

app.get('/', (req: any, res: any) => {
    res.send('App is on')
})

app.listen(PORT, () =>{
    console.log(`App is listening on port ${PORT}`)
});

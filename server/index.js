import express from 'express';
import { amazonRoutes } from '../apis/Amazon';
import { googleRoutes } from '../apis/Google';
import { microsoftRoutes } from '../apis/Microsoft';
import * as path from 'path';


const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', [amazonRoutes, googleRoutes, microsoftRoutes]);


// draw home screen 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`App listening to port: ${PORT}`);
    }
})
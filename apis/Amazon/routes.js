import { Router } from 'express';

import * as path from 'path';

const router = new Router();

router.get('/rekognition', function(req, res) {
    console.log('amazon');
    res.sendFile(path.join(__dirname + '/index.html'));
})

export default router;
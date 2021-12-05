__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/api.html')
})

router.get('/author', (req, res) => {
    config = {
        status: true,
        result: {
            author : 'Ground67',
            github: 'ground67',
            instagram: 'ground_67',
            youtube: 'Gak Punya',
            docs: 'https://github.com/Ground67/Islamic-Api'
        }
    }
    res.json(config)
})

module.exports = router

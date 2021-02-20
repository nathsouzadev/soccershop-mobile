module.exports = server => {
    Users = require('../models/user');

    server.post('/user', async (req, res) => {
        const { user, password } = req.body;
        const result = await Users.create({ user, password });
        res.send(result)
    })

    server.get('/user', async (req, res) => {
        const result = await Users.find();
        res.send(result)
    })
}    

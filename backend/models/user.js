const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    user: {
        type: String
    },
    password: {
        type: String
    }
})

schemaModel = model('user', UserSchema)

module.exports = schemaModel;

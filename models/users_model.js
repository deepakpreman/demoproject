var mongoose = require('mongoose');

// Setup schema
var users_schema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    },
    user_type: Integer,
    is_active: Boolean 
});

// Export users model
var users = module.exports = mongoose.model('users', users_schema);
module.exports.get = function (callback, limit) {
    users.find(callback).limit(limit);
}
// Import user model
User = require('../models/users_model');

exports.login = function (req, res) {
User.find(
{
    $and:
    [
        {user_name: req.params.user_name},
        {password: req.params.password}
    ]
}
,function (err, users) {
        if (err) {
            res.json({
                status: false,
                message: err,
                data:[],
            });
        }
        if(users.length != 0){
            res.json({
                status: true,
                message: "User retrieved successfully",
                data: users
            }); 
        }else{
            res.json({
                status: false,
                message: "User does not exist",
                data: users
            });
        }        
    });
};
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: false,
                message: err,
                data:[],
            });
        }
        res.json({
            status: true,
            message: "Users retrieved successfully",
            data: users
        });
    });
};

// Handle create new user
exports.new = function (req, res) {
    var user = new User();
    user.first_name  = req.body.first_name;
    user.last_name   = req.body.last_name;
    user.user_name   = req.body.user_name;
    user.email       = req.body.email;
    user.password    = req.body.password;
    user.gender      = req.body.gender;
    user.phone       = req.body.phone;
    user.save(function (err) {
        if (err) {
            res.json({
                status: false,
                message: err,
                data:[],
            });
        }
        res.json({
            status: true,
            message: 'New User created',
            data: user
        });
    });
};

// Handle view user info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.json({
                status: false,
                message: err,
                data:[],
            });
        }
        res.json({
            status: true,
            message: 'User details loading..',
            data: user
        });
    });
};

// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.json({
                status: false,
                message: err,
                data:[],
            });
        }
        user.first_name  = req.body.first_name;
        user.last_name   = req.body.last_name;
        user.user_name   = req.body.user_name;
        user.email       = req.body.email;
        user.password    = req.body.password;
        user.gender      = req.body.gender;
        user.phone       = req.body.phone;
        user.save(function (err) {
            if (err) {
                res.json({
                    status: false,
                    message: err,
                    data:[],
                });
            };
            res.json({
                status: true,
                message: 'User Info updated',
                data: user
            });
        });
    });
};

// Handle delete user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err) {
            res.json({
                status: false,
                message: err,
                data:[],
            });
        }
        res.json({
            status: true,
            message: 'User deleted',
            data : []
        });
    });
};


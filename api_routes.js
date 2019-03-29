// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: true,
        message: 'LifeAnalytics APIs.',
    });
});

// Import user controller
var user_Controller = require('./controllers/users_controller');
// User routes
router.route('/login/:user_name&:password')
    .get(user_Controller.login);
router.route('/users')
    .get(user_Controller.index)
    .post(user_Controller.new);
router.route('/users/:user_id')
    .get(user_Controller.view)
    .patch(user_Controller.update)
    .put(user_Controller.update)
    .delete(user_Controller.delete);
// Export API routes
module.exports = router;
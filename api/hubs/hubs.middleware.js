const Hubs = require('./hubs-model.js');

async function checkHubId(req, res, next) {
    try {
        const hub = await Hubs.findById(req.params.id);
        if (!hub) {
            next({ status: 404, message: `Hub ${req.params.id} not found` })
        } else {
            req.hub = hub;
            next();
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    checkHubId,

}
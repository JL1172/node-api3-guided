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

function checkNewHub(req,res,next) {
    const {name} = req.body;
    if (name !== undefined && typeof name === "string" && name.trim().length > 0) {
        next();
    } else {
        next({status : 422, message : "hubs need a name"});
    }
}

module.exports = {
    checkHubId,
    checkNewHub
}
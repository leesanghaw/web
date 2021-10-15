module.exports = (req, res, next) => {
    res.locals.flash = req.session.flash
    console.log("[DEBUG]flash.js: flash = "+req.session.flash)
    if(req.session.flash) {
        console.log("[DEBUG]flash.js: type = "+req.session.flash.type)
    }
    delete req.session.flash
    next()
}
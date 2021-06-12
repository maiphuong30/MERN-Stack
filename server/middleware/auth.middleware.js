module.exports.isAdminLoggedin = function (req, res,next) {
    if (!req.cookies.user) {
        res.redirect('/auth');
        return;
    }
    if(req.cookies.username){
        res.redirect('/');
        return;
    };
    next();
}
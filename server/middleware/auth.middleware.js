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
const jwt = require('jsonwebtoken')

module.exports.verifyToken = (req, res, next) => {
    console.log("hihi");
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1]

	if (!token)
		return res
			.status(401)
			.json({ success: false, message: 'Access token not found' })

	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

		req.userId = decoded.userId
		next()
	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'Invalid token' })
	}
}
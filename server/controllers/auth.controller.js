const argon2 = require('argon2');
const jwt = require('jsonwebtoken')
var acc = require("../models/user");
process.env.ACCESS_TOKEN_SECRET="phuongcute";
module.exports.login = function (req, res) {
    res.render('adminpage/login', { title: "Login"});
}
module.exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
		const user = await acc.findOne({ Username:username });
        if(user){
            const passwordValid = await argon2.verify(user.Password, password)
            if (!passwordValid)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect password' })
            // Return token
			const token = jwt.sign(
				{ userId: user._id },
				process.env.ACCESS_TOKEN_SECRET
			)
				console.log(token);
		res.json({
			success: true,
			message: 'User logged in successfully',
			token
		})
        }else{
            res.json({message: "no user found"});
        }
    } catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
module.exports.logout_get = (req, res) => {
    res.cookie('user', '', { maxAge: 1 });
    res.redirect('/');
}
module.exports.reg = async (req, res) => {
	//const { username, password } = req.body
    //var username = req.body.username;
    //var password = req.body.password;
    var username = 'phuong';
    var password = 'phuong';
    console.log(username);
	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Missing username and/or password' })

	try {
		const hashedPassword = await argon2.hash(password)
		const newUser = new acc({ Username: username, Password: hashedPassword })
		await newUser.save()
		res.json({
			success: true,
			message: 'User created successfully',
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
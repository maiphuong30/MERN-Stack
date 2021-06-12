const argon2 = require('argon2');
var acc = require("../models/user");
module.exports.login = function (req, res) {
    res.render('adminpage/login', { title: "Login"});
}
module.exports.postLogin = async (req, res) => {
    const { username, inputPassword } = req.body;
    try {
		const user = await acc.findOne({ Username:username });
        if(user){
            const passwordValid = await argon2.verify(user.Password, inputPassword)
            if (!passwordValid)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect password' })
            res.cookie('user', username);
            res.redirect('/admin');
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
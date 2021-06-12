const LoginForm = () => {
	return(
		<>
			<form className='form-signin'>
			<div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Thông tin đăng nhập</h1>
            </div>
			<div className="form-label-group">
                <input type="text" name="username" id="username" className="form-control" placeholder="Tên đăng nhập" required autofocus/>
                <label for="username">Tên đăng nhập</label>
            </div>
			<div className="form-label-group">
                <input type="password" name="inputPassword" id="inputPassword" className="form-control" placeholder="Password" required/>
                <label for="inputPassword">Mật khẩu</label>
            </div>
			<button className="btn btn-lg btn-primary btn-block" type="submit">Đăng nhập</button>
            <div className="mb-4">
                <h6>Bạn chưa có tài khoản?
                    <a href="/dangki">Đăng kí</a>
                </h6>
            </div>
			</form>
			
		</>
	)
}

export default LoginForm
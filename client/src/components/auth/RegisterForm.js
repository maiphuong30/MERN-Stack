import { Component } from "react";
class RegisterForm extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center h-100 mt-4">
            <div class="card">
        <div class="card-header">
            <h3>Register</h3>
        </div>
        <div class="card-body">
		<form class="form-horizontal" action='' method="POST">
  <fieldset>
    <div class="control-group">
      <label class="control-label"  for="username">Username</label>
      <div class="controls">
        <input type="text" id="username" name="username" placeholder="username" class="form-control"/>
      </div>
    </div>
    <div class="control-group">
      <label class="control-label" for="email">E-mail</label>
      <div class="controls">
        <input type="text" id="email" name="email" placeholder="" class="form-control"/>
      </div>
    </div>
 
    <div class="control-group">
      <label class="control-label" for="password">Password</label>
      <div class="controls">
        <input type="password" id="password" name="password" placeholder="" class="form-control"/>
      </div>
    </div>
 
    <div class="control-group">
      <label class="control-label"  for="password_confirm">Password (Confirm)</label>
      <div class="controls">
        <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="form-control"/>
      </div>
    </div>
 
    <div class="control-group">
      <div class="controls">
        <button class="btn btn-success">Register</button>
      </div>
    </div>
  </fieldset>
</form>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-center links">
                Bạn đã có tài khoản?<a href="login">Login</a>
            </div>
        </div>
    </div>
</div>
        );
    }
}
export default RegisterForm
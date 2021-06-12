import { Component } from "react";
import { FaUserAlt,FaKey } from 'react-icons/fa';
class LoginForm extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center h-100 mt-4">
            <div class="card">
        <div class="card-header">
            <h3>Sign In</h3>
        </div>
        <div class="card-body">
            <form>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><FaUserAlt size={30}/></span>
                    </div>
                    <input type="text" class="form-control" placeholder="username"/>
                    
                </div>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><FaKey size={30}/></span>
                    </div>
                    <input type="password" class="form-control" placeholder="password"/>
                </div>
                <div class="row align-items-center remember">
                    <input type="checkbox"/>Remember Me
                </div>
                <div class="form-group">
                    <input type="submit" value="Login" class="btn btn-warning float-right login_btn" />
                </div>
            </form>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-center links">
                Don't have an account?<a href="register">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
            </div>
        </div>
    </div>
</div>
        );
    }
}
export default LoginForm;
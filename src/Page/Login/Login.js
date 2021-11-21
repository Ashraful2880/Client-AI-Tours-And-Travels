import React from 'react';
import './Login.css';
import { Link , useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
const Login = () => {

    const{handleSignIn,handleEmail,handlePassword,user}=useAuth();
    let history=useHistory();
    return (
        <div className="container pt-2">
            <div className="row my-5">
                <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
                    <form onSubmit={handleSignIn} className="login-design border-2 w-100 mx-auto h-auto py-5 rounded-3">
                        <h3 className="text-primary">AI Tourse & Travels</h3>
                        <h3 className="text-info">Please Login</h3>
                        <div>
                            <input onBlur={handleEmail} className="login-input p-2 w-75 my-4 border-0 border-bottom border-info"  type="email" placeholder="Your Email" />
                        </div>
                        <div>
                            <input onBlur={handlePassword} className="login-input p-2 w-75 my-3 border-0 border-bottom border-info" type="password" placeholder="Your Password" />
                        </div>
                        <div>
                            {user.email?history.push('/placeorder'):''}
                            <input className="p-2 w-75 my-2 fs-5 btn btn-primary" type="submit" value="Login"/>
                        </div>
                        <div>
                            <h5>New User? <Link className="font-semibold" to="/register">Please Register</Link></h5>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
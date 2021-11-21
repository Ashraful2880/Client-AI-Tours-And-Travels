import React from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import google from '../../Image/google.png';
import github from '../../Image/gtihub.png';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    const{handleRegister,handleName,handleEmail,handlePassword,googleSignIn,gitHubSignIn,error,user,setError}=useAuth();
    let history=useHistory();
    return (
        <div className="pt-1">
            <div className="mt-5 container mx-auto border-2 rounded-3">
                <div className="rounded-3 reg-area mx-auto w-100">
                    <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
                        <h3 className="text-primary mb-5 mt-4">Register Please</h3>
                        <form onSubmit={handleRegister}>
                        {user.email?history.push('/offers'):''}
                        {user.email?setError(''): <span className="text-warning">{error}</span> }
                            <div>
                                <input onBlur={handleName} className="reg-input w-75 p-3 my-3 border-0 border-bottom border-info" type="text" placeholder="Your Name" required/>
                            </div>
                            <div>
                                <input onBlur={handleEmail} className="reg-input w-75 p-3 my-3 border-0 border-bottom border-info" type="email" placeholder="Your Email" required/>
                            </div>
                            <div>
                                <input onBlur={handlePassword}className="reg-input w-75 p-3 my-3 border-0 border-bottom border-info" type="password" placeholder= " Your Password" required  />
                            </div>
                            <div>
                                <input className="w-75 p-2 my-2 btn btn-primary rounded-3" type="submit" value="Register" />
                            </div>
                            <div>
                            <h5 className="">Already Registerd? <Link className="text-blue-400 font-semibold" to="/login">Login Here</Link></h5>
                            <p className=" font-semibold">Or</p>
                            </div>
                        </form>
                        <div className="mx-auto mb-5 pb-5">
                            <button onClick={googleSignIn} className=" border sign-btn border border-info border-2">
                                <img className="w-100" src={google} alt="googleImage" />
                            </button>
                            <button onClick={gitHubSignIn} className=" border sign-btn border border-info border-2" >
                                <img className="w-100" src={github} alt="githubImage" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
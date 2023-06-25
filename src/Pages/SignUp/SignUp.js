import React, { useContext } from 'react';
import loginSVG from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const SignUp = () => {
    // const { } = useContext(AuthContext)
    const { createUser, googleSingIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate("/");
            })
            .catch(error => { console.log(error) });
    }


    const handleSignInWithGoogle = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(user);

                    // get JWT Token
                fetch("https://genious-car-server-gold.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // Local storage is the easiest way but not the best practice
                        localStorage.setItem("genius-token", data.token);
                        navigate('/');
                })                


            })
            .catch(error => {
                console.error(error);
                
        })
    }

    const handleSignInWithGitHub = () => {
        alert("Sorry, The developer didn't apply this feature yet!!")
    }


    return (
        <div className="hero w-full my-20 bg-base-200">
        <div className="hero-content grid gap-20 md:grid-cols-2 ">

            <div className="flex justify-center">
                <img className='w-3/4' src={loginSVG} alt="" />                
            </div>

            <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <h1 className="text-5xl text-center font-bold pt-5">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                    <input className='btn w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-600' type="submit" value="Sign Up" />
                </div>
                    </form>
                <div>
                    <p className='text-center'>or Log In with</p>
                    <SocialLogin
                        handleSignInWithGoogle={handleSignInWithGoogle}
                        handleSignInWithGitHub={handleSignInWithGitHub}
                        ></SocialLogin>
                    </div>
                <div className='text-center pb-5'>
                    <p>Have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;
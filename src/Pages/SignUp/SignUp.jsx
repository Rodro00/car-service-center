import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext)
  const location = useLocation();
  const Navigate = useNavigate()

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          Navigate(location?.state ? location?.state : '/')
        })
        .then(error => console.log(error));
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="text-center lg:text-left w-1/2">
        <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-4xl font-bold text-center mt-2">Sign Up!</h1>
      <form onSubmit={handleSignUp} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Create Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className='btn btn-primary' type="submit" value="Sign Up" />
        </div>
      </form>
      <p className='p-4 text-center'>already have an account? <Link to='/login' className='text-orange-500 font-semibold'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;
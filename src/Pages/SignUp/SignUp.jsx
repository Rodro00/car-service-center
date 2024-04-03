import { Link } from 'react-router-dom';
import img from '../../assets/login/login.svg';

const SignUp = () => {
    const loginSignUp = event =>{
        event.preventDefault()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="text-center lg:text-left w-1/2">
        <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-4xl font-bold text-center mt-2">Sign Up!</h1>
      <form onSubmit={loginSignUp} className="card-body">
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
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Create Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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
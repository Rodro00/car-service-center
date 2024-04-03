import { Link } from 'react-router-dom';
import img from '../../assets/login/login.svg';

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="text-center lg:text-left w-1/2">
        <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-4xl font-bold text-center mt-2">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className='btn btn-primary' type="submit" value="Login" />
        </div>
      </form>
      <p className='p-4 text-center'>New Users Please? <Link to='/sign' className='text-orange-500 font-semibold'>Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;
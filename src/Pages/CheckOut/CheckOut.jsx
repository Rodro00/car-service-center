import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const services = useLoaderData();
    const {title, price, _id, img} = services;

    const {user} = useContext(AuthContext);

    const handleBookService = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = form.email.value;
      // console.log(name,date,email)
      const booking = {
        customerName: name,
        email,
        date,
        img,
        service_id: _id,
        service: title,
        price: price
      }
      console.log(booking)

      // post method
      fetch('http://localhost:1000/booking',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        }
      })

    }
    return (
      <div className="mt-10">
        <h1 className="bg-violet-400 text-center mb-6 rounded-lg font-semibold  text-2xl ">{title}</h1>
        <form onSubmit={handleBookService} >
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" defaultValue={user?.name} name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="password" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount </span>
          </label>
          <input type="text" defaultValue={'$'+price} className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-outline btn-warning btn-block" type="submit" value="check out" />
        </div>
        </form>
      </div>
    );
};

export default CheckOut;
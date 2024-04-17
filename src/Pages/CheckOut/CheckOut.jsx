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
            text: "Your Order Confirm!",
            icon: "success"
          });
        }
      })

    }
    return (
      <div className="mt-3 ">
        {/* <div className="flex rounded-lg justify-center w-full p-1">
        <h1 className="text-center p-2 rounded-lg text-white font-semibold justify-center bg-[#FF3811]">Home/CheckOut</h1>
        </div> */}
        <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full rounded-lg ">
    <img src={img} className="w-full h-[350px] rounded-lg " />
    <div className="absolute h-[350px] rounded-xl justify-left flex items-center   gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className='text-white font-semibold space-y-4 w-2/5 pl-12 pt-4'>
            <h2 className='text-4xl'>{title}</h2>
        </div>
    </div>
  </div> 
</div> 
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
          <input type="date" placeholder="password" name="date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cost </span>
          </label>
          <input type="text" defaultValue={'$'+price} className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-outline mb-4 bg-[#FF3811] btn-block" type="submit" value="Confirm Order" />
        </div>
        </form>
      </div>
    );
};

export default CheckOut;
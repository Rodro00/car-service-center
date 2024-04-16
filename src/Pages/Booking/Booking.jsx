import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
// import axios from "axios";

const Booking = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:1000/booking?email=${user.email}`;

    const [bookings,setBookings] = useState([]);

    useEffect(()=>{
        // axios.get(url, {withCredentials: true})
        // .then(res=>{
        //     setBookings(res.data);
        // })
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[url])

    const handleDelete = id =>{
        const proced = confirm('are you sure you want to delete')
        if(proced){
            fetch(`http://localhost:1000/booking/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0 ){
                    Swal.fire({
                        title: "Good job!",
                        text: "Deleted success",
                        icon: "success"
                      });
                    const remaining = bookings.filter(booking=>booking._id !==id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleConfirm = id =>{
        fetch(`http://localhost:1000/booking/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                // modify
                const remaining = bookings.filter(booking =>booking._id !==id);
                const updated = bookings.find(booking =>booking._id === id);
                updated.status = 'confirm';
                const newBooking = [updated, ...remaining];
                setBookings(newBooking);
            }
        })
    }


    return (
        <div className="mt-10">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr >
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="">Photo</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     {
        bookings.map(booking=><BookingRow key={booking._id} 
            booking={booking}
            handleDelete={handleDelete}
            handleConfirm={handleConfirm}
            ></BookingRow>)
     }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Booking;
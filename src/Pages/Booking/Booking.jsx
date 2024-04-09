import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:1000/booking?email=${user.email}`;

    const [bookings,setBookings] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])


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
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
     {
        bookings.map(booking=><BookingRow key={booking._id} booking={booking}></BookingRow>)
     }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Booking;
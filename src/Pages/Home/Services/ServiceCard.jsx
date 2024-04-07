/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, title,img,price} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-red-400 font-semibold">${price}</p>
    <div className="card-actions justify-end">
    </div>
    <div>
      <Link to={`/checkout/${_id}`} className="btn btn-outline btn-warning">Book Now</Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
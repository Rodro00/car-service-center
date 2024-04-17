import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:1000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                product.map(product=><ProductCard
                product={product}
                key={product._id}></ProductCard>)
            }
        </div>
    );
};

export default Products;
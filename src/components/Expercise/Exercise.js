import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Exercise.css';
import logo from '../../images/PROPIC_n.jpg'

const Exercise = () => {
const [products,setProducts] = useState([]);
const [time,setTime] = useState(0);
useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])

 const handleTime=(x)=>{
    setTime((preTime)=>(preTime+x))


 }




    return (
    <div className='exercise-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key = {product.id}
                        product ={product}  handleTime={handleTime}
                    ></Product>)
                }
                </div>
            <div className="cart-container">
                <div className='personal-info'>
                <img src={logo} alt=""></img> 
                 <div>
                 <h3>Asraful Alam</h3>
                <p>Copenhagen, Denmark</p>
                 </div>
                
                </div>
                <div className='customer-data'>
                <h5>Weight: 75 kg</h5>
                <h5>Height : 175 cm</h5>
                <h5>Age : 37 year</h5>

                <h1>{time}</h1>

            </div>
               
            </div>
           
            </div>
            
        
    );
};

export default Exercise;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Exercise.css';
import logo from '../../images/PROPIC_n.jpg'
import AddBreak from '../AddBreak/AddBreak';
import Swal from 'sweetalert2'
import QuestionAnswe from '../QuestionAnswer/QuestionAnswe';

const Exercise = () => {
const [products,setProducts] = useState([]);
const [time,setTime] = useState(0);
const [sec, setSec] = useState(0)
useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])

 const handleTime=(x)=>{
    setTime((preTime)=>(preTime+x))


 }

 const handleAddBreak =(x) =>{
    setSec(x)
    const cart ={};
    cart[cart] = sec;
    localStorage.setItem('break',JSON.stringify(cart))

 }

 const toastActivate = ()=>{
    Swal.fire(
        'Good job!',
        'You completed the exercise today!',
        'success'
      )
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
                <h5>Weight: 75 kg </h5> 
                <h5>Height : 175 cm</h5>
                <h5>Age : 37 year</h5>

                

            </div>
            <div className='exercise-time'>
                 <h3>Exercise Details</h3>   
             <h6>Exercise Time :{time} s</h6>
            </div>
            <div>
                
                <AddBreak 
                
                 sec={sec}
                handleAddBreak ={handleAddBreak}
                toastActivate ={toastActivate}
                ></AddBreak>
            </div>
               
            </div>
            <div >
                <QuestionAnswe></QuestionAnswe>

            </div>
           
            </div>
            
        
    );
};

export default Exercise;
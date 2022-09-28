
import './Product.css'

const Product = (props) => {
    const {name,picture,Time,handleTime} = props.product;
    
   
    
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Time required : {Time}</p>

            </div>
            <button onClick={()=>props.handleTime(Time)}  className='btn-cart'>Add To List</button>
        </div>
    );
};

export default Product;
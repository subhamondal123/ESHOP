import React, {useEffect, useState} from 'react';
import {Link, Redirect,} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const ProductScreen = () => {
    const {id} = useParams();
    const {product} = useSelector(state => state.productReducers);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
     console.log(product);
    //  const [qty,setQty] = useState(1);
     //const product = data.products.find(x => x._id === props.match.params.id);
    // const history = useHistory();

    useEffect(() => {
        dispatch({type: 'PRODUCT', id})
     }, [id])
    return (
    <div>
       <div className="back-to-result"><Link to="/">Back to result</Link></div>
       <div className="details">
           <div className="details-image">
               <img src ={`/images/${product.image}`} alt="product"/>
           </div>
           <div className="details-info">
               <ul>
                    <li><h4>{product.name}</h4></li>
                    <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
                    <li>Price: <b>${product.price}</b></li>
                    <li>Description:
                        <div>{product.description}</div>
                    </li>
               </ul>
           </div>
           <div className="details-action">
               <ul>
                    <li>Price: <b>${product.price}</b></li>
                        <li>
                            
                           <button className="button" onClick ={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })}>Add to Cart</button>     
                            
                        </li>
               </ul>
           </div>
       </div>
       </div>
    )
};



export default ProductScreen;
import React, { useEffect, useState } from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
//import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
    const {products} = useSelector(state => state.productReducers);
    console.log(products);
    return (    
    <ul className="products">
   
        {products.map(product => (
                  
   <li>
       <div className="product" key={product.id}>
       <Link to={`/details/${product.id}`}><img className="product-image" src={`/images/${product.image}`} alt="product"/></Link>
           <div className="product-name"><Link to={'/product/${product.id}'}>{product.name}</Link></div>
        <div className="product-brand">{product.brand}</div>                     
        <div className="product-price">${product.price}</div>
        <div className="product-rating">{product.rating} Stars {product.numReviews} reviews</div>
       </div>
   </li>
   
        ))}
</ul>

    )
}

export default HomeScreen;



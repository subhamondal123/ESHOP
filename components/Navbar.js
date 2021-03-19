import React, { useEffect } from 'react';
import {connect,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

//import { BsFillBagFill } from "react-icons/bs";

const Navbar=() =>{
    
    const {totalQuantities}=useSelector(state => state.cartReducers)  
    return (
        <div className="navbar">      
            <div>
                <button className="brand" >&#9776;</button>
                </div>
            <ul className="left">
                <li>  
                    <Link to ="/">E-SHOP</Link></li>
            </ul>    
            <ul className="right">
                <li>          
                    
                    <Link to="/cart">Cart</Link><span className="shoppingCart"><i class="fas fa-cart-plus"></i>
                    <span className="cartCount">{totalQuantities}</span>
                    <Link to={'/signin'}><span className="signIn">Sign In</span></Link>
                   
                    </span>
                       
                </li>
            </ul>    
        </div>
        );
}

const mapStateToProps = state => ({
    basketProps:state.basketState,
})

export default Navbar;
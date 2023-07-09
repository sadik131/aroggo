import React from 'react';
import classes from "../../Style/nav/Nav.module.css"
import logo from "../../assets/logo-white.webp"
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineSearch ,AiOutlineShoppingCart} from 'react-icons/ai';


const Nav = () => {
    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <img className={classes.logo} src={logo} alt="" />
                <div className={classes.deliver}>
                    <span>Deliver to </span>
                    <h2><CiLocationOn />Bangladesh</h2>
                </div>
                <div className={classes.serch}>
                    <input className={classes.input} type="text" placeholder='Search for medicine/health products' />
                    <AiOutlineSearch className={classes.search}/>
                </div>
                <div>
                    <span>Hello , user <h2>Aroggo</h2></span>
                </div>
                <div>
                    <h3>Refer & Earn</h3>
                </div>
                <div className={classes.cart}>
                    <AiOutlineShoppingCart className={classes.cartIcon}/>
                    <h1 className={classes.cartTitle}>cart</h1>
                    <span className={classes.cartCount}>0</span>
                </div>
            </div>
        </div>
    );
}

export default Nav;

import React from 'react';
import { motion } from "framer-motion"
import classes from "../../Style/SideSlider/sideNav.module.css"
import SideLink from './SideLink';
import { useGlobalContex } from '../../Hooks/reactContex/Contex';

const SideNav = ({ children }) => {
    const { open } = useGlobalContex()

    return (
        <div className={classes.mainContent}>
            <motion.div
                animate={{ width: open ? "50px" : "200px" }}
                className={classes.container}
            >
                <div className={classes.main}>
                    <SideLink></SideLink>
                </div>
            </motion.div>
            <div>{children}</div>
        </div >
    );
}

export default SideNav;

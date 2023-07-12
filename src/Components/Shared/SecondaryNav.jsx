import React from 'react';
import classes from "../../Style/nav/secondaryNav.module.css"
import { GiHamburgerMenu } from "react-icons/gi"
import Sarvices from './Sarvices';
import { BiPhoneCall, BiLogoBlogger } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { FaFileUpload } from "react-icons/fa"
import { PiNumberEightBold } from "react-icons/pi"
import { useGlobalContex } from '../../Hooks/reactContex/Contex';


const SecondaryNav = () => {
    const { open, setOpen } = useGlobalContex()
    
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <span>
                    <GiHamburgerMenu
                    onClick={()=>setOpen(!open)}
                    className={classes.icon} />
                </span>
                <h5>category</h5>
            </div>
            <div className={classes.sarvice}>
                <Sarvices
                    title="Call To Order"
                    icon={<BiPhoneCall className={classes.icon} />}
                ></Sarvices>
                <Sarvices
                    title="Health Care"
                    icon={<AiOutlineHeart className={classes.icon} />}
                ></Sarvices>
                <Sarvices
                    title="Pharmacy Register"
                    icon={<PiNumberEightBold className={classes.icon} />}
                ></Sarvices>
                <Sarvices
                    title="Blog"
                    icon={<BiLogoBlogger className={classes.icon} />}
                ></Sarvices>

                <div className={classes.right}>
                    <button className={classes.one}>Career</button>
                    <button className={classes.two}>We are hiring</button>
                    <button className={classes.three}>Quick Order</button>
                    <Sarvices
                        title="Upload Prescription"
                        icon={<FaFileUpload className={classes.icon} />}
                    ></Sarvices>
                </div>
            </div>
        </div>
    );
}

export default SecondaryNav;

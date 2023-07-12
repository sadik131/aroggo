import React from 'react';
import img1 from "../../assets/sidenav/img1.webp"
import img2 from "../../assets/sidenav/img2.webp"
import img3 from "../../assets/sidenav/img3.webp"
import img4 from "../../assets/sidenav/img4.webp"
import img5 from "../../assets/sidenav/img5.webp"
import img6 from "../../assets/sidenav/img6.webp"
import img7 from "../../assets/sidenav/img7.webp"
import img8 from "../../assets/sidenav/img8.webp"
import classes from "../../Style/SideSlider/sideNav.module.css"
import { useGlobalContex } from '../../Hooks/reactContex/Contex';
import { motion } from "framer-motion"

const SideLink = () => {
    const { open } = useGlobalContex()

    const links = [
        {
            path: "/covid",
            name: "Covid-19 Special",
            img: img1
        },
        {
            path: "/women",
            name: "Women Care Devices",
            img: img2
        },
        {
            path: "/sexual",
            name: "Sexual Wellness",
            img: img3
        },
        {
            path: "/herbal",
            name: "Herbal and Homeopathy",
            img: img4
        },
        {
            path: "/babyMon",
            name: "Baby & Mom care ",
            img: img5
        },
        {
            path: "/drinks",
            name: "Nutrition and drinks",
            img: img6
        },
        {
            path: "/vitamins",
            name: "Supplements and Vitamins",
            img: img7
        },
        {
            path: "/devices",
            name: "Devices",
            img: img8
        }
    ]

    // const animate = {
    //     start:{
    //         opacity:0
    //     },
    //     end:{
    //         opacity:1,

    //     }
    // }

    return (
        <div className={classes.sideContainer}>
            {links.map((link, index) => {
                const { path, name, img } = link
                return <div className={classes.sideLink} key={index}>
                    <img className={classes.linkImg} src={img} alt={name} />
                    {!open && <motion.span
                        animate={{ transitionDelay: 1 }}
                    >{name}</motion.span>}
                </div>
            })}
        </div>
    );
}

export default SideLink;

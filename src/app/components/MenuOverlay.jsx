import React from "react";
import Navlink from "./Navlink";

const MenuOverlay = ({links}) => {
    return(
        <ul className="flex justify-center py-2 md:hidden lg:hidden text-white">
            {links.map((link, index) => (
                <li key={index}>
                    <Navlink href={link.path} title={link.title}/>
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay;
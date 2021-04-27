import React from "react";
import  mod from "./Nav.module.css"
let Nav = () => {
    return (
        <nav className={mod.nav}>
            <div className={mod.item}>
                <a href="">profile</a>
            </div>
            <div className={mod.item}>
                <a href="">message</a>
            </div>
            <div className={mod.item}>
                <a href="">news</a>
            </div>
            <div className={mod.item}>
                <a href="">musick</a>
            </div>
            <div className={mod.item}>
                <a href="">settings</a>
            </div>
        </nav>
    );
}

export default Nav;
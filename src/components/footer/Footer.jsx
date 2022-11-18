import React, {useState} from "react";
import style from './footer.module.sass';
import {GrFormClose} from 'react-icons/gr'

const Footer = () => {
    const current = new Date();
    const date = `${current.getFullYear()}`;

    const [isClosed, setIsClosed] = useState(false)

    return (
        <footer className={style.footer}>
            {!isClosed && (<div>
                <span>All rights reserved {date}</span>
                <button onClick={() => setIsClosed(!isClosed)}>
                    <GrFormClose size={20}/>
                </button>
            </div>)}

        </footer>
    )
};

export default Footer;
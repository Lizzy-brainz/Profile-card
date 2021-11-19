import React from 'react'
import Twitter from '../Images/twitter.png';
import Facebook from '../Images/facebook.png';
import Instagram from '../Images/instagram.png';
import Github from '../Images/github.png';

const Footer = ()=>{
    return(
        <>
<footer>
    <div className="footer-wrap">
        <img src={Twitter}/>
        <img src={Facebook}/>
        <img src={Instagram}/>
        <img src={Github}/>
    </div>
</footer>

        </>
    )
}

export default Footer;
import React from 'react';
import image from '../images/cute_daffy-removed.png';

const Footer = () => (
    <div className="Footer">
        <div className="logo">
            <img src={image} alt=""/>
        </div>

        <div className="copy">Created by Dmitri Z.</div>
    </div>
);

export default Footer;
import React from 'react';
import '../css/Logo.css';
import Leftbox1 from './Leftbox1';
import Leftbox2 from './Leftbox2';
import Leftbox3 from './Leftbox3';

const Logo = () => {
    return (
        <>
        <div className='container'>
            <p className='logohead'>Create New</p>
        </div>
        <div className='row'>
           <div className='box'>
           <Leftbox1/>
           </div>
           <div className='box'>
           <Leftbox2/>
           </div>
           <div className='box'>
           <Leftbox3/>
           </div>
        </div>
        </>
    );
};

export default Logo;

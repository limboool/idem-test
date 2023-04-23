import './Company.index.scss';
import { arr } from './arr';

import React, { useRef } from 'react';

function Company() {
    const cartRef = useRef(null);

    const handleScrollLeft = () => {
        cartRef.current.scrollLeft -= 100;
    };

    const handleScrollRight = () => {
        cartRef.current.scrollLeft += 100;
    };

    return (
        <div className="company">
            <div className="saffari">
                <div>
                    <h>особенности работы</h>
                    <h1>компании Saffari Estate</h1>
                </div>
                <div className='nav-buttons'>
                    <button onClick={handleScrollLeft}><img alt='' src="/img/left.png"></img></button>
                    <button onClick={handleScrollRight}><img alt='' src="/img/right.png"></img></button>
                </div>
            </div>

            <div className='cart' ref={cartRef}>
                {arr.map((item) => (
                    <div className='cart_content'>
                        <div className="about_company">
                            <img src={item.imageUrl} alt="" />
                            <h>{item.name}</h>
                            <p>{item.text}</p>
                        </div>
                        <div className='link'><a href="">{item.link}</a></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Company;
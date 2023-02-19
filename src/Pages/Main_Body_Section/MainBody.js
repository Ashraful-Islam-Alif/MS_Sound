import React from 'react';

import headphone from './headphone.png'
import frame from './Frame 22.png'
import rating from './start-icons.png'
const MainBody = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <img src={headphone} alt="" srcset="" />
                </div>
                <div>
                    <h2>Beats Studio 3 Wireless Headphone</h2>
                    <div>
                        <img src={rating} alt="" srcset="" />
                        <img src={rating} alt="" srcset="" />
                        <img src={rating} alt="" srcset="" />
                        <img src={rating} alt="" srcset="" />
                        <img src={rating} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div>
                <img src={frame} alt="" srcset="" />
            </div>
        </div>
    );
};

export default MainBody;
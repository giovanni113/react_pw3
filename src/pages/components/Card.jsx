import React from 'react'

import Ice_Giant from '../../css/images/Ice_Giant.jpg' 

export default (props) => 
    <>
        <div className="Box">
            <img src={Ice_Giant} alt="No_Image" className="Box-Img" />
            <h2 className="Box-Title"> {props.Label} </h2>
        </div>
    </>

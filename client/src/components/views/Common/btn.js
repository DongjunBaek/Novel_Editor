import React from 'react';
import '../Common/btn.css';
// import ProductImage from './Sections/ProductImage';
// import ProductInfo from './Sections/ProductInfo';
// button 만들기

function btn(props) {

    // console.log(props.href);
    // console.log(props.btnNm);
    return (
        <div className="btn-container" >
                <a href={props.href}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {props.btnNm}
                </a>
        </div>
    )
}

export default btn

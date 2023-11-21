import React from 'react';
import './Button.css';
import {Link} from 'react-scroll';

const STYLES =['btn--primary', 'btn--outline' , 'btn--simple'];
const SIZES =['btn--medium', 'btn--large'];



export const Button =({children,type, onClick, buttonStyle, buttonSize, linkTo}:any) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div>
            <button
            onClick={onClick}
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}>
                {children}
            </button>
        </div>
    )
}
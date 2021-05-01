import React, { useEffect } from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"


const Toggle = ({theme,  toggleTheme,tsrc }) => {

    const Button = styled.button`
    cursor: pointer;
    position:absolute;
    z-index:10;
    right:0;
    border:none;
    background:transparent;
    top:20px;
    right:25px;
    }
  `;
    return (
        <>
        
        <Button onClick={toggleTheme} >
         <img src={tsrc} alt="toggle" id="toggle"  style={{height:"50px",borderRadius:"30px"}}/>
        </Button>
        </>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;

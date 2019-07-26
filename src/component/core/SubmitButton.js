import React from 'react'
import styled from "styled-components";

const CustomSubmitButton = styled.button`
    background-color: rgb(105, 48, 44);
    color: rgb(255, 255, 255);
    font-size: 21px;
    width: auto;
    border-width: 0px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    border-radius: 3px;
    padding: 0.4em 1.25em;
    font-family:'Athiti', sans-serif;
`;

const SubmitButton = (props) => {
    return (
        <a href='/submit'>
            <CustomSubmitButton>{props.submit}</CustomSubmitButton>
        </a>
    )
}
export default SubmitButton
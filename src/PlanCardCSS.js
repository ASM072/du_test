import React from "react";
import styled, { css } from "styled-components";
import classes from './SourcePlanCard.module.scss'

export const Card = styled.div`
    position: absolute;
    overflow: hidden;
    border-radius: 25px;
    border-left: 4px solid red;
    width: 400px;
    margin: 3rem 3rem 3rem 3rem;
    padding: 3rem 0 2rem;
    border-radius: 0.9rem;
    color: white;
    background: linear-gradient( #00dbd3 0%, #fc00ff 100%);
    box-shadow: 
        0 24px 38px 3px rgba(0,0,0,0,025),
        0 9px 46px 8px rgba(0,0,0,0.025),
        0 11px 15px -7px rgba(0,0,0,0,025);

`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    margin-left: 1rem;
    padding-left: 0.5rem;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;
`

export const FirstDetail = styled.div`
    color: #00dbde;
    font-size: 1.25rem;
    border-bottom: 1px solid #bbb;
`
export const SecondDetail = styled.div`
    color: #00dbde;
    font-size: 1.25rem;
    border-bottom: 1px solid #bbb;

`
export const ThirdDetail = styled.div`
    color: #00dbde;
    font-size: 1.25rem;
    border-bottom: 1px solid #bbb;

`
export const ForthDetail = styled.div`
    color: #00dbde;
    font-size: 1.25rem;
    border-bottom: 1px solid #bbb;
`
export const SelectButton = styled.button`
    align-items: flex-end;
    height: 40px;
    padding: 0 2rem;
    border: 0;
    border-radius: 10px;
    background: white;
    color: #00dbde
`

export const CustomButton = ({ text }) => {
    return (
        <>
            <div className={classes.btn}>
                {text}
            </div>
        </>
    )
}
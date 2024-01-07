// color1 = #fc00ff
// color2 = #00dbde
import React from "react";
import classes from "./SourcePlanCard.module.scss";

export const CustomButton = ({ text }) => {
    return (
            <div className={classes.btn}>
                {text}
            </div>
    )
}
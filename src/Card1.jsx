import React from "react";
import classes from "./SourcePlanCard.module.scss";
import { CustomButton, SelectButton } from "./PlanCardCSS";

const Card1 = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.initial_detail}>
          <div className={classes.you_pay}>You Pay</div>
          <div className={classes.year_rate}>
            AED 125 <span>/month</span>
          </div>
          <div className={classes.vat_rates}>For 12 months + 5% VAT</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.power_plan_detail}>
          <div className={classes.you_get}>You Get</div>
          <div className={classes.plan_price}>Power Plan 125</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.storage_detail}>
          <div className={classes.flex}>
            <div className={classes.gb_detail}>4 GB</div>
            <div className={classes.desc_detail}>National data</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.gb_detail}>100</div>
            <div className={classes.desc_detail}>Flexi minutes</div>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.plan_details}>
          <ul>
            <li>No activation fee. Save AED 125</li>
            <li>4 GB free data on WiFi UAE</li>
          </ul>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.btn_container}>
          <div className={classes.qoute}>What you get </div>
          <CustomButton text="Select" />
        </div>
      </div>
    </>
  );
};

export default Card1;

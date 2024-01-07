import React from "react";
import classes from "./SourcePlanCard.module.scss";
import { CustomButton } from "./PlanCardCSS";

const Card2 = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.initial_detail}>
          <div className={classes.you_pay}>You Pay</div>
          <div className={classes.year_rate}>
            AED 500 <span>/month</span>
          </div>
          <div className={classes.vat_rates}>For 12 months + 5% VAT</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.power_plan_detail}>
          <div className={classes.you_get}>You Get</div>
          <div className={classes.plan_price}>Power Plan 500</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.storage_detail}>
          <div className={classes.flex}>
            <div className={classes.old_price}>50</div>
            <div className={classes.gb_detail}>100 GB</div>
            <div className={classes.desc_detail}>Double national data</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.gb_detail}>1500</div>
            <div className={classes.desc_detail}>Flexi minutes</div>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.solo_plan_details}>
          <ul>
            <li>No activation fee. Save AED 125</li>
            <li>100 GB free data on WiFi UAE</li>
            <li>Carry over data to next month</li>
            <li>Amazon Prime on us</li>
            <li>Free Internet Calling Pack</li>
            <li>Roaming 2 GB</li>
          </ul>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.limited_offer}>
          <div className={classes.title}>Limited time offer</div>
          <div className={classes.offer_detail}>
            The Entertainer <span>on us for 12 months</span>
          </div>
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

export default Card2;

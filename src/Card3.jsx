import React from "react";
import classes from "./SourcePlanCard.module.scss";
import { CustomButton } from "./CustomButton";

const Card3 = () => {
  return (
    
      <div className={classes.container}>
        <div className={classes.initial_detail}>
          <div className={classes.you_pay}>You Pay</div>
          <div className={classes.year_rate}>
            AED 300 <span>/month</span>
          </div>
          <div className={classes.vat_rates}>For 12 months + 5% VAT</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.power_plan_detail}>
          <div className={classes.you_get}>You Get</div>
          <div className={classes.plan_price}>Power Plan 300</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.storage_detail}>
          <div className={classes.flex}>
            <div className={classes.old_price}>25</div>
            <div className={classes.cross_line}>\</div>
            <div className={classes.gb_detail}>50 GB</div>
            <div className={classes.desc_detail}>Double national data</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.gb_detail}>1020</div>
            <div className={classes.desc_detail}>Flexi minutes</div>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.solo_plan_details}>
          <ul>
            <li>No activation fee. Save AED 125</li>
            <li>25 GB free data on WiFi UAE</li>
            <li>Carry over data to next month</li>
            <li>Amazon Prime on us</li>
            <li>Free Internet Calling Pack</li>
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
    
  );
};

export default Card3;

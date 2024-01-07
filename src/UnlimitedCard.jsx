import React from "react";
import classes from "./UnlimitedCard.module.scss";
import { CustomButton } from "./CustomButton.js";

const UnlimitedCard = () => {
  return (
    
      <div className={classes.unlimited_card_container}>
        <div className={classes.initial_detail}>
          <div className={classes.you_pay}>You Pay</div>
          <div className={classes.year_rate}>
            AED 1000 <span>/month</span>
          </div>
          <div className={classes.vat_rates}>For 12 months + 5% VAT</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.power_plan_detail}>
          <div className={classes.you_get}>You Get</div>
          <div className={classes.plan_price}>Power Plan 1000</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.storage_detail}>
          <div className={classes.flex}>
            <div className={classes.old_price}>120</div>
            <div className={classes.cross_line_1}>\</div>
            <div className={classes.gb_detail}>Unlimited</div>
            <div className={classes.desc_detail}>National data</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.old_price}>25000</div>
            <div className={classes.cross_line_2}>\</div>
            <div className={classes.gb_detail}>Unlimited</div>
            <div className={classes.desc_detail}>Flexi minutes</div>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.solo_plan_details}>
          <ul>
            <li>No activation fee. Save AED 125</li>
            <li>120 GB free data on WiFi UAE</li>
            <li>Amazon Prime on us</li>
            <li>Carry over data to next month</li>
            <li>Free Internet Calling Pack</li>
            <li>Roaming 5 GB</li>
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

export default UnlimitedCard;

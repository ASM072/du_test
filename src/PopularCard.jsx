import React from "react";
import classes from "./SourcePlanCard.module.scss";
import { CustomButton } from "./PlanCardCSS";

const PopularCard = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.most_popular}>Most popular</div>
        <div className={classes.initial_detail}>
          <div className={classes.you_pay}>You Pay</div>
          <div className={classes.year_rate}>
            AED 200 <span>/month</span>
          </div>
          <div className={classes.vat_rates}>For 12 months + 5% VAT</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.power_plan_detail}>
          <div className={classes.you_get}>You Get</div>
          <div className={classes.plan_price}>Power Plan 200</div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.storage_detail}>
          <div className={classes.flex}>
            <div className={classes.old_price}>13</div>
            <div className={classes.cross_line}>\</div>
            <div className={classes.gb_detail}>26 GB</div>
            <div className={classes.desc_detail}>Double national data</div>
          </div>
          <div className={classes.flex}>
            <div className={classes.gb_detail}>400</div>
            <div className={classes.desc_detail}>Flexi minutes</div>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.solo_plan_details}>
          <ul>
            <li>No activation fee. Save AED 125</li>
            <li>15 GB free data on WiFi UAE</li>
            <li>Carry over data to next month</li>
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

export default PopularCard;

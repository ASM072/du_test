import React from "react";
import classes from "./SourcePlanCard.module.scss";
import Card1 from "./Card1";
import PopularCard from "./PopularCard";
import UnlimitedCard from "./UnlimitedCard";
import Card2 from "./Card2";
import Card3 from "./Card3";

const SourcePlanCard = () => {
  return (
    <>
      <div className={classes.source_card_container}>
        <Card1 />
        <PopularCard />
        <Card3 />
        <Card2 />
        <UnlimitedCard />
      </div>
    </>
  );
};

export default SourcePlanCard;

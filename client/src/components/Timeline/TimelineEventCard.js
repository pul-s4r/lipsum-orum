import React from "react";
import classes from "./TimelineEventCard.module.css";

import * as config from "../../config";

const TimelineEventCard = (props) => {
  let shortDescription = props.description.slice(0, 100);
  if (shortDescription.length === 100) shortDescription += "...";

  let eventDate = new Date(props.eventDate); 

  let date =
    eventDate.getDay() +
    " " +
    config.MONTHS[eventDate.getMonth()] +
    " " +
    eventDate.getFullYear();

  const cardClickHandler = () => {
    props.onClick(props.id);
  };

  return (
    <div className={classes["card-container"]} onClick={cardClickHandler}>
      <div className={classes.overlay}></div>
      <div className={classes.card}>
        <img className={classes.image} src={props.imgSrc} alt="event" />
        <div className={classes.content}>
          <div className={classes["content__header"]}>
            <div className={classes["content__title"]}>{props.title}</div>
            <div className={classes["content__date"]}>{date}</div>
          </div>
          <div className={classes["content__description"]}>
            {shortDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEventCard;

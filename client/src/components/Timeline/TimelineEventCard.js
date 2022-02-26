import React from "react";
import classes from "./TimelineEventCard.module.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TimelineEventCard = (props) => {
  let shortDescription = props.description.slice(0, 60);
  if (shortDescription.length === 60) shortDescription += "...";

  let date =
    props.date.getDay() +
    " " +
    months[props.date.getMonth()] +
    " " +
    props.date.getFullYear();
  console.log(date, props.date);
  return (
    <React.Fragment>
      <div className={classes.overlay}></div>
      <div className={classes.card}>
        <img className={classes.image} src={props.imgUrl} alt="event" />
        <div className={classes.content}>
          <div className={classes["content__header"]}>
            <div className={classes["content__title"]}>{props.title}</div>
            <div className={classes["content__date"]}>{date}</div>
          </div>
          <div className={classes["content__description"]}>
            {shortDescription}
          </div>
        </div>
        <button type="button" className={classes.more}>
          View more
        </button>
      </div>
    </React.Fragment>
  );
};

export default TimelineEventCard;

import classes from "./TimelineEventCard.module.css";

const TimelineEventCard = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={props.imgUrl} alt="event" />
      <div className={classes.content}>Hi</div>
    </div>
  );
};

export default TimelineEventCard;

import { Chrono } from "react-chrono";
import * as config from "../../config";

import classes from "./Timeline.module.css";

import TimelineHeader from "./TimelineHeader";
import TimelineEventCard from "./TimelineEventCard";
import TimelineFooter from "./TimelineFooter";
import Modal from "../UI/Modal";
import { useState } from "react";

const Timeline = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const cardClickaHandler = (eventId) => {
    console.log(eventId);
  };

  const events = config.DUMMY_EVENTS.map((event) => {
    return (
      <TimelineEventCard
        key={event.id}
        onClick={cardClickaHandler}
        {...event}
      />
    );
  });

  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.timeline}>
      {isModalOpen && (
        <Modal onClose={modalCloseHandler}>
          <div>Anything put here inside modal</div>
        </Modal>
      )}
      <TimelineHeader />
      <Chrono {...config.CHRONO_TIMELINE_SETTINGS}>{events}</Chrono>
      <TimelineFooter />
    </div>
  );
};

export default Timeline;

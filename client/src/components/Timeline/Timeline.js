import { Chrono } from "react-chrono";
import * as config from "../../config";

import classes from "./Timeline.module.css";

import TimelineHeader from "./TimelineHeader";
import TimelineEventCard from "./TimelineEventCard";
import TimelineFooter from "./TimelineFooter";
import Modal from "../UI/Modal";
import { useState } from "react";
import AddMemoryModal from "../AddMemoryModal/AddMemoryModal";

const Timeline = (props) => {
  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(true);
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
  const addMemoryHandler = () => {
    setIsMemoryModalOpen(true);
  };

  const addMemoryModalCloseHandler = () => {
    setIsMemoryModalOpen(false);
  };

  return (
    <div className={classes.timeline}>
      {isMemoryModalOpen && (
        <AddMemoryModal onClose={addMemoryModalCloseHandler}>
          <div>Anything put here inside modal</div>
        </AddMemoryModal>
      )}
      <TimelineHeader />
      <Chrono {...config.CHRONO_TIMELINE_SETTINGS}>{events}</Chrono>
      <TimelineFooter onAddMemory={addMemoryHandler} />
    </div>
  );
};

export default Timeline;

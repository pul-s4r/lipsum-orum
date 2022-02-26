import { Chrono } from "react-chrono";
import * as config from "../../config";

import classes from "./Timeline.module.css";

import TimelineHeader from "./TimelineHeader";
import TimelineEventCard from "./TimelineEventCard";
import TimelineFooter from "./TimelineFooter";
import Modal from "../UI/Modal";
import { useState } from "react";
<<<<<<< HEAD

const Timeline = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
=======
import AddMemoryModal from "../AddMemoryModal/AddMemoryModal";

const Timeline = (props) => {
  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(true);
>>>>>>> 512bd9454f6a43b02490f8fd0242085495a1e30d
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
<<<<<<< HEAD

  const modalCloseHandler = () => {
    setIsModalOpen(false);
=======
  const addMemoryHandler = () => {
    setIsMemoryModalOpen(true);
  };

  const addMemoryModalCloseHandler = () => {
    setIsMemoryModalOpen(false);
>>>>>>> 512bd9454f6a43b02490f8fd0242085495a1e30d
  };

  return (
    <div className={classes.timeline}>
<<<<<<< HEAD
      {isModalOpen && (
        <Modal onClose={modalCloseHandler}>
          <div>Anything put here inside modal</div>
        </Modal>
      )}
      <TimelineHeader />
      <Chrono {...config.CHRONO_TIMELINE_SETTINGS}>{events}</Chrono>
      <TimelineFooter />
=======
      {isMemoryModalOpen && (
        <AddMemoryModal onClose={addMemoryModalCloseHandler}>
          <div>Anything put here inside modal</div>
        </AddMemoryModal>
      )}
      <TimelineHeader />
      <Chrono {...config.CHRONO_TIMELINE_SETTINGS}>{events}</Chrono>
      <TimelineFooter onAddMemory={addMemoryHandler} />
>>>>>>> 512bd9454f6a43b02490f8fd0242085495a1e30d
    </div>
  );
};

export default Timeline;
